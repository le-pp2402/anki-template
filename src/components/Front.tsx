import type { Message } from '../App';

export const Front = ({ data, showAnswer }: { data: Message['data'], showAnswer: boolean }) => {
    return (
        <div className="bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-md w-full max-w-sm p-4 sm:max-w-lg sm:p-6">
            <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Word</span>
                    <span className="text-xl sm:text-2xl font-bold text-gray-800 leading-tight">{showAnswer ? data.word : '****'}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Phonetic</span>
                    <span
                        className="text-sm sm:text-base"
                        style={{
                            color: "#1677ff",
                            background: "#e6f4ff",
                            borderColor: "#91caff",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderRadius: "0.375rem",
                            padding: "0.2rem 0.4rem",
                            display: "inline-block",
                            width: "fit-content",
                            fontWeight: "530",
                        }}
                    >
                        {data.phonetic}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Meaning</span>
                    <span className="text-lg sm:text-xl text-gray-900 leading-relaxed">
                        {data.meaning}
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs sm:text-sm text-gray-500 font-medium mb-1">Part of Speech</span>
                    <span
                        className="text-sm sm:text-base"
                        style={{
                            color: "#52c41a",
                            background: "#f6ffed",
                            borderColor: "#b7eb8f",
                            borderStyle: "solid",
                            borderWidth: "1px",
                            borderRadius: "0.375rem",
                            padding: "0.2rem 0.45rem",
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