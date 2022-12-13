import LoadingQuote from '../components/LoadingQuote';
import QuoteComponent from '../components/QuoteComponent';
import { useCounter, useFetch } from '../hooks';

export const Layout = () => {
    const { counter, increment, decrement } = useCounter(1);

    const url = `https://breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, fetchData } = useFetch(url);
    const { author, quote } = !!data && data[0];

    fetchData;

    return (
        <>
            <div className="grid">
                {isLoading ? (
                    <LoadingQuote />
                ) : (
                    <QuoteComponent author={author} quote={quote} />
                )}
                <div>
                    <button className="mt-3" onClick={decrement}>
                        Previous Quote
                    </button>
                    <button className="mt-4 mx-4" onClick={increment}>
                        Next Quote
                    </button>
                </div>
            </div>
        </>
    );
};
