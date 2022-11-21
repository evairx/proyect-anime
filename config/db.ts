import mysql from "serverless-mysql";

const pool = mysql({
    config: {
        host: "129.151.109.234",
        user: "animepost",
        password: "pjx6ssC3hHitCaYt",
        database: "animepost",
    },
});

export { pool };
