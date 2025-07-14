"use client";

import React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto hover:bg-neutral-950 bg-gradient-to-b from-[#171717] to-neutral-00 backdrop-blur-3xl border px-4 py-2 rounded-xl  border-neutral-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between  rounded-xl items-center w-full py-4 text-left"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <ChevronDown className="text-white" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="  text-white p-4 rounded-xl mb-4">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FAQ = () => {
  return (
    <div className="relative bg-black flex h-screen  w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="text-white text-7xl font-bold">FAQs</h1>

      <div
        className="w-full h-full flex flex-col items-center gap-6 mt-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/faqbg.png')" }}
      >
        {" "}
        <div className="w-1/2 h-4/5 backdrop-blur-2xl flex flex-col items-center gap-6 pt-20">
          <FAQItem
            question="What is an AI Code Generator?"
            answer="An AI Code Generator is a tool that uses artificial intelligence to automatically generate code snippets, functions, or entire modules based on user input or natural language descriptions."
          />
          <FAQItem question="afvaef" answer="aefogvnasivb" />
          <FAQItem question="afvaef" answer="aefogvnasivb" />
          <FAQItem question="afvaef" answer="aefogvnasivb" />
          <FAQItem question="afvaef" answer="aefogvnasivb" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
