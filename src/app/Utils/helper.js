import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import axios from 'axios';
import _ from "../Utils/@lodash";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

function usePost(url) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (data) => {
        setLoading(true);
        try {
            const result = await axios.post(url, data);
            setResponse(result.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, postData };
}

function useForm(initialState, onSubmit) {
    const [form, setForm] = useState(initialState);

    const handleChange = useCallback(event => {
        event.persist();
        setForm(_form =>
            _.setIn(
                { ..._form },
                event.target.name,
                event.target.type === 'checkbox' ? event.target.checked : event.target.value
            )
        );
    }, []);

    const resetForm = useCallback(() => {
        if (!_.isEqual(initialState, form)) {
            setForm(initialState);
        }
    }, [form, initialState]);

    const setInForm = useCallback((name, value) => {
        setForm(_form => _.setIn(_form, name, value));
    }, []);

    const handleSubmit = useCallback(
        event => {
            if (event) {
                event.preventDefault();
            }
            if (onSubmit) {
                onSubmit();
            }
        },
        [onSubmit]
    );

    return {
        form,
        handleChange,
        handleSubmit,
        resetForm,
        setForm,
        setInForm
    };
}

export {
    useFetch,
    usePost,
    useForm
};