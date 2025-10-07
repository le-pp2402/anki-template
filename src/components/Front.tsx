import type { Message } from '../App';

export const Front = ({ data, showAnswer }: { data: Message['data'], showAnswer: boolean }) => {
    return (
        <div className="bg-white bg-opacity-60 rounded-xl shadow-lg w-full max-w-lg p-6">
            <div className="space-y-6">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium mb-1">Word</span>
                    <span className="text-2xl font-bold text-gray-800">{showAnswer ? data.word : '****'}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium mb-1">Phonetic</span>
                    <span
                        className="text-base"
                        style={{
                            color: "#1677ff",
                            background: "#e6f4ff",
                            borderColor: "#91caff",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.25rem",
                            display: "inline-block",
                            width: "fit-content",
                            fontWeight: "530",
                        }}
                    >
                        {data.phonetic}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium mb-1">Meaning</span>
                    <span className="text-xl text-gray-900">
                        {data.meaning}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500 font-medium mb-1">Part of Speech</span>
                    <span
                        className="text-base"
                        style={{
                            color: "#52c41a",
                            background: "#f6ffed",
                            borderColor: "#b7eb8f",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderRadius: "0.375rem",
                            padding: "0.25rem 0.5rem",
                            display: "inline-block",
                            width: "fit-content",
                        }}
                    >
                        {data.partOfSpeech}
                    </span>
                </div>
            </div>
        </div>
    )
}