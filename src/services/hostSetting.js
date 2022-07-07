var url = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = "https://one.hashroot.com/server";
} else {
    url = "https://one.hashroot.com/server";
}

export const API_BASE_URL = url;
