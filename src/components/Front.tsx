export const Front = () => {
    return (
        <div className="bg-white bg-opacity-60 rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="space-y-6">
            <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-medium mb-1">Word</span>
                <span className="text-2xl font-bold text-gray-800">Serendipity</span>
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
                        padding: "0.25rem 0.5rem",
                        display: "inline-block",
                        width: "fit-content",
                        fontWeight: "530",
                    }}
                >
                    /ˌser.ənˈdɪp.ə.ti/
                </span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500 font-medium mb-1">Meaning</span>
                <span className="text-base text-gray-700">
                The fact of finding interesting or valuable things by chance
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
                    Noun
                </span>
            </div>
            </div>
        </div>
    )
}