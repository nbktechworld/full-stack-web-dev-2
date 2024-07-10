-- Role: full_stack_user2
-- DROP ROLE IF EXISTS full_stack_user2;

CREATE ROLE full_stack_user2 WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  PASSWORD 'changeme';
  