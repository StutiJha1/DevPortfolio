import { useState } from "react";
import axios from "axios";

export default function ResumeGenerator() {
  const [info, setInfo] = useState("");
  const [resume, setResume] = useState("");

  const handleGenerate = async () => {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert resume writer." },
        { role: "user", content: `Create a professional resume and cover letter for:\n${info}` }
      ]
    }, {
      headers: {
        "Authorization": `Bearer ${process.env.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}`,
        "Content-Type": "application/json"
      }
    });

    setResume(response.data.choices[0].message.content);
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">AI Resume Generator</h2>
      <textarea 
        className="w-full p-2 mb-4 text-black"
        rows="5"
        placeholder="Enter your skills, experience, education..."
        value={info}
        onChange={(e) => setInfo(e.target.value)}
      />
      <button onClick={handleGenerate} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Generate Resume</button>
      {resume && (
        <pre className="mt-4 bg-gray-900 p-4 rounded whitespace-pre-wrap">{resume}</pre>
      )}
    </div>
  );
}
