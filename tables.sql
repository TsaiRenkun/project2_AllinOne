Create table if not exists users(
 Id serial primary key,
name text,
password text,
salt text,
UNIQUE (name)
);

Create table if not exists user_workout(
 Id serial primary key,
user_id integer,
workout_id integer
);

Create table if not exists bodypart(
 Id serial primary key,
name text,
UNIQUE (name)
);

Create table if not exists workout(
 Id serial primary key,
name date,
bodypart text,
bodypart_id integer,
user_id integer,
UNIQUE (name, bodypart,bodypart_id)
);

Create table if not exists exercise_workout(
 Id serial primary key,
workout_id integer,
exercise_id integer,
user_id integer,
UNIQUE (workout_id, exercise_id,user_id)
);

Create table if not exists exercise(
 Id serial primary key,
name text,
instructions text,
bodypart_id integer
);

Create table if not exists favourite(
 Id serial primary key,
user_id integer,
exercise_id integer,
UNIQUE (exercise_id, user_id)
);