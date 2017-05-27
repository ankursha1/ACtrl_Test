CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
INSERT INTO public.users(identifier,
             name, loginid, password)
    VALUES (uuid_generate_v4(),'ankur', 'admin', 'admin');
