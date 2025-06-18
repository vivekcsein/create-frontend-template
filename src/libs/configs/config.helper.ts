// Helper functions to safely access localStorage (only in browser)
export const getLocalStorageItem = (key: string, fallback: any) => {
    if (typeof window !== "undefined" && window.localStorage) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : fallback;
    }
    return fallback;
};
export const setLocalStorageItem = (key: string, value: any) => {
    if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
};
export const removeLocalStorageItem = (key: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
    }
};

export const putLocalStorageItem = (key: string, value: any) => {
    if (typeof window !== "undefined" && window.localStorage) {
        const existing = window.localStorage.getItem(key);
        let arr = [];
        if (existing) {
            try {
                arr = JSON.parse(existing);
                if (!Array.isArray(arr)) arr = [];
            } catch {
                arr = [];
            }
        }
        arr.push(value);
        window.localStorage.setItem(key, JSON.stringify(arr));
    }
};