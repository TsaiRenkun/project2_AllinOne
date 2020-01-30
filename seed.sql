-- Create table if not exists users(
--  Id serial primary key,
-- name text,
-- password text,
-- salt text
-- );

INSERT INTO users
(name,password)
VALUES
('sammy','1234');

INSERT INTO users
(name,password)
VALUES
('kunny','1234');

INSERT INTO users
(name,password)
VALUES
('benny','1234');

INSERT INTO users
(name,password)
VALUES
('robby','1234');

-- Create table if not exists user_workout(
--  Id serial primary key,
-- user_id integer,
-- workout_id integer
-- );

-- Create table if not exists bodypart(
--  Id serial primary key,
-- name text,
-- UNIQUE (name)
-- );

INSERT INTO bodypart
(name)
VALUES
('Legs');

INSERT INTO bodypart
(name)
VALUES
('Chest');

INSERT INTO bodypart
(name)
VALUES
('Arms');

INSERT INTO bodypart
(name)
VALUES
('Back');

INSERT INTO bodypart
(name)
VALUES
('Shoulders');

-- Create table if not exists workout(
--  Id serial primary key,
-- name text,
-- bodypart text,
-- UNIQUE (name, bodypart)
-- );


-- Create table if not exists exercise_workout(
--  Id serial primary key,
-- workout_id integer,
-- exercise_id integer,
-- UNIQUE (workout_id, exercise_id)
-- );

-- Create table if not exists exercise(
--  Id serial primary key,
-- name text,
-- instructions text,
-- bodypart_id integer
-- );

INSERT into exercise
(name, instructions, bodypart_id)
VALUES
('DeadLift', 'Keep your lower back straight, core tight.', '4')