-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id SERIAL NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    birthdate date NOT NULL,
    biography character varying(1024) COLLATE pg_catalog."default",
    favorite_programming_language character varying(255) COLLATE pg_catalog."default",
    favorite_color character varying(255) COLLATE pg_catalog."default",
    terms_agreed boolean,
    newsletter_subscribed boolean DEFAULT false,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to full_stack_user2;