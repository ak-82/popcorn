import {useEffect} from "react";

export function useKey(key,eventHandlerFunction) {
    useEffect(
        function () {
            function callback(e) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    eventHandlerFunction();
                }
            }

            document.addEventListener("keydown", callback);

            return function () {
                document.removeEventListener("keydown", callback);
            };
        },
        [eventHandlerFunction]
    );
}