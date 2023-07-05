CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    username    TEXT NOT NULL,
    password    TEXT NOT NULL,
    firstname  TEXT NOT NULL,
    lastname   TEXT NOT NULL,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    createdat  TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedat  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
    id          SERIAL PRIMARY KEY, 
    name        TEXT NOT NULL,
    quantity    INTEGER DEFAULT 1,
    category    TEXT NOT NULL,
    calories    INTEGER NOT NULL,
    imageurl   TEXT NOT NULL,
    userid     INTEGER REFERENCES users(id) ON DELETE CASCADE,
    createdat  TIMESTAMP NOT NULL DEFAULT NOW()
);
