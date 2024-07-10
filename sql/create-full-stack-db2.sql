-- Database: full_stack_db2

-- DROP DATABASE IF EXISTS full_stack_db2;

CREATE DATABASE full_stack_db2
    WITH
    OWNER = full_stack_user2
    ENCODING = 'UTF8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
