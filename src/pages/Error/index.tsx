import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <div id="error-page">
                <h1>Error</h1>
                <p>予期しないエラーが発生しました。</p>
                <p>
                    <i>{error.statusText}</i>
                </p>
            </div>
        );
    }
}
