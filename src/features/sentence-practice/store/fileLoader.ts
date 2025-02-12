// store/fileLoader.ts
import type { PracticeQuestion } from "../core/answer-processing/types"

export interface FileLoader {
  loadQuestionFile: (path: string) => Promise<PracticeQuestion[]>
}

// Test implementation
export class TestFileLoader implements FileLoader {
  private testData: Record<string, PracticeQuestion[]>

  constructor(testData: Record<string, PracticeQuestion[]> = {}) {
    this.testData = testData
  }

  async loadQuestionFile(path: string): Promise<PracticeQuestion[]> {
    if (path === "non/existent/path") {
      throw new Error("File not found")
    }

    if (path in this.testData) {
      return this.testData[path]
    }

    // Default test data if path not specified
    return [
      {
        english: "Hello.",
        answers: [{ segments: ["こんにちは。"] }],
      },
      {
        english: "Good morning.",
        answers: [{ segments: ["おはよう", "ございます。"] }],
      },
    ]
  }
}
