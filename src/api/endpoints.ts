const Endpoints = {
    AUTH: {
        LOGIN: "/auth/token/",
        REFRESH: "/auth/token/refresh/",
        LOGOUT: "/auth/logout/",
        PROFILE:"/auth/profile/"
    },

    BOOKS: {
        LIST:"/api/books/",
        SINGLEBOOK:"/api/books/"// must be id of book after /
    }
};

export default Endpoints;