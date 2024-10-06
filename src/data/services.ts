import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Zara Bot",
    icons: [
      "/skills/python.png",
      "/skills/ai.png",
      "/skills/chat-gpt.png",
      "/skills/telegram.png",
      "/skills/code.png",
    ],
    shortDescription:
      "I create intelligent AI chatbots that enhance user interactions",
    description:
      "I developed Zara, an AI-powered chatbot integrated with Gemini Pro and Gemini Vision Pro, capable of generating both image and text responses seamlessly. The bot provides intelligent, context-aware conversations while handling media files, making it versatile for a variety of business and personal applications.",
  },
  {
    id: 2,
    title: "DeepSecure AI",
    icons: [
      "/skills/opencv.png",
      "/skills/python.png",
      "/skills/tf.png",
      "/skills/hug.png",
      "/skills/tkinter.png",
    ],
    shortDescription: "I create reliable deepfake detection solutions.",
    description:
      "I develop state-of-the-art deepfake detectors that analyze audio, video, and image files to identify manipulated media. Using advanced AI techniques, my solutions help ensure the authenticity of content and safeguard against deceptive media practices.",
  },
  {
    id: 3,
    title:"Hazel Cart",
    icons: [
      "/skills/html.png",
      "/skills/typescript.svg",
      "/skills/react.png",
      "/skills/java.png",
      "/skills/css.png",
    ],
    shortDescription: "I build dynamic and responsive e-commerce platforms",
    description:
      "I develop fully functional e-commerce websites using React, ensuring fast performance, seamless navigation, and modern design. From dynamic product listings to secure payment gateways, I create an interactive and user-friendly shopping experience, tailored to meet your business needs.",
  },
 
];

export default services;
