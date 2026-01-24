// src/services/api.service.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface MessageResponse {
    answer: string;
    source: string;
    similarityScore?: string;
}

export interface Query {
    _id: string;
    question: string;
    answer: string;
    source: string;
    createdAt: string;
}

export interface QueriesResponse {
    success: boolean;
    message: string;
    data: {
        count: number;
        queries: Query[];
    };
}

export const apiService = {
    /**
     * Send a question to the AI assistant
     */
    async askQuestion(companyId: string, question: string, source: string = "web"): Promise<MessageResponse> {
        const response = await fetch(`${API_BASE_URL}/api/ask`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ companyId, question, source }),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || 'Failed to get answer from AI');
        }

        return response.json();
    },

    /**
     * Fetch all queries (history) for a specific company
     */
    async getQueries(companyId: string): Promise<QueriesResponse> {
        const response = await fetch(`${API_BASE_URL}/api/queries/${companyId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch queries history');
        }

        return response.json();
    }
};
