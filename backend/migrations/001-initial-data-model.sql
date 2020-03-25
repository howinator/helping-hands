CREATE SEQUENCE id_seq;

CREATE TABLE human (
    id BIGINT PRIMARY KEY DEFAULT nextval('id_seq'),
    name TEXT,
    email text not null
);

CREATE TABLE helper (
    id BIGINT PRIMARY KEY DEFAULT nextval('id_seq'),
    human_id BIGINT REFERENCES human(id),
    verified boolean DEFAULT FALSE
);

CREATE TABLE help_seeker (
    id BIGINT PRIMARY KEY DEFAULT nextval('id_seq'),
    human_id BIGINT REFERENCES human(id)
);

CREATE TABLE human_location_map (
    human_id BIGINT REFERENCES human(id),
    zipcode TEXT NOT NULL,
    PRIMARY KEY(human_id, zipcode)
);
