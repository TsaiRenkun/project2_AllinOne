-- Create table if not exists users(
--  Id serial primary key,
-- name text,
-- password text,
-- salt text
-- );

-- INSERT INTO users
-- (name,password)
-- VALUES
-- ('sammy','1234');

-- INSERT INTO users
-- (name,password)
-- VALUES
-- ('kunny','1234');

-- INSERT INTO users
-- (name,password)
-- VALUES
-- ('benny','1234');

-- INSERT INTO users
-- (name,password)
-- VALUES
-- ('robby','1234');

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

-- INSERT INTO bodypart
-- (name)
-- VALUES
-- ('Legs');

-- INSERT INTO bodypart
-- (name)
-- VALUES
-- ('Chest');

-- INSERT INTO bodypart
-- (name)
-- VALUES
-- ('Arms');

-- INSERT INTO bodypart
-- (name)
-- VALUES
-- ('Back');

-- INSERT INTO bodypart
-- (name)
-- VALUES
-- ('Shoulders');

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


INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Barbell Deadlifts', 'Stand in front of a loaded barbell with your feet shoulder width apart under the bar.
Grasp the bar with a shoulder width overhand grip and bend your knees as you sit back with your hips. This will be the starting position. Your arms should be fully extended and grasping the bar with your back straight.
Begin the lift by exhaling and pushing upwards with your heels to extend your hips and knees and stand straight up.
When you are nearly standing, pull your shoulder blades together and drive your hips forward into the bar.
Return to the starting position by inhaling and bending your knees and hips while keeping your back straight and the bar at arms length.
Repeat the exercise for the prescribed number of repetitions.','1');


INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Barbell Lunges', 'Start by loading a loaded barbell off of a weight rack and placing it across your upper back with your feet about 8 inches apart and your toes facing forward. You should use a grip slightly wider than your shoulders.
Lunge two to three feet forward with your first leg and land on your heel then your forefoot. Your abs should be drawn in and your upper body should be straight and perpendicular to the floor.
Slowly lower your body by flexing the knee and hip of your front leg until the rear leg is almost in contact with the floor.
Return to the standing position by pressing upwards forcibly with your forward leg and extending your hip and knee.
Repeat the motion with your alternate leg.','1');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Step Ups', 'Place a bench or box one and a half to three feet in front of you.
Grasp a loaded barbell with a comfortable grip and lift it off of a weight rack with it placed across your shoulders or grab dumbbells and hold them at your sides.
With your left leg, step up on the bench and press upwards by extending the left hip and left knee while keeping equal pressure on the forefoot and heel.
Follow with your right leg so you are standing on the bench with both feet.
Step down with your left leg and then your right leg to the starting position.
Repeat the movement starting with your right leg.','1');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Glute Bridges', 'Lie on your back flat on the floor with your hands at your sides and your knees bent. Your feet should be shoulder width apart. This will be your starting position.
Exhale and lift your hips off the floor by pushing with your heels and keeping your back straight.
Hold this position at the top for a few seconds before breathing in and slowly lowering your torso to the starting position.
Repeat the exercise for the prescribed number of repetitions.','1');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Split Squats', 'Hold dumbbells in both hands at your sides.
Bend forward at the knee and allowing your hips to bend back as if you are sitting down (squatting). You should descend until your knee is bent at a ninety (90) degree angle and your quadriceps and hamstrings are parallel to the floor.
Return to the starting position by pressing upwards and exteding your leg while maintaining an equal distribution of weight on your forefoot and heel. Continue looking forward.
Once you have returned to the starting position and are standing straight up, pause for a moment and repeat.','1');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Barbell Squat', 'Start by setting up your desired weight with the bar on the squat rack and position yourself under the bar with your the bar on your traps and your feet shoulder width apart and your toes pointing forward.
Lift the barbell off the squat rack by pressing upwards slightly.
Slowly lower the weight by bending forward at the knees and allowing your hips to bend back as if you are sitting down (squatting). You should descend until your thighs are just past parallel to floor.
Return to the starting position standing straight up by pressing upwards and extending your legs while maintaining an equal distribution of weight on your forefoot and heel. Continue looking forward
Once you have returned to the starting position, pause for a moment then and repeat.','1');


-- CHEST exercise --------------------



-- 2



---------------------------------------


INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Bench Press', 'Lie on a flat bench with your feet firmly planted on the floor.
Grasp the bar with a pronated grip (palms facing forward) so that your hands are shoulder width apart or slightly wider.
Lift the barbell from the rack and hold it with your arms locked and fully extended. This will be your starting position.
Inhale and slowly lower the barbell to the middle of your chest.
Pause for a brief moment, then exhale and press the bar upwards to the starting position by extending your arms and using your chest muscles. Tip:Squeeze your chest in the contracted position.
Once back in the starting position with your arms fully extended, pause for a moment then again slowly lower the weight to your middle chest.
Repeat for the desired number of repetitions.','2');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Cable Chest', 'Set up a flat bench in the middle of a cable station.

Set the cable pulleys so that the handles are in line with your shoulders when youre lying on the bench and choose the correct weight.

Grab the cable handles and sit on the bench, leaning back carefully. In the starting position your arms will be out to your sides, your elbows pointing down, and your palms facing up with the cable handles at about shoulder height.

Exhale and focus on using your chest to raise the handles in a wide arc above the middle of your chest until they are directly above you and your palms are facing each other.

Inhale and slowly lower the weight along the same path back to starting position.

Repeat for the desired number of repetitions.','2');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Pushups', 'Lie on an exercise mat or the floor face down and place your hands slightly wider than shoulder width apart while holding your torso up at arms length and keeping your back straight.

Next, inhale and lower yourself down by bending at the arms until your chest almost touches the floor. Your biceps and forearms should form a ninety (90) degree angle in this position at the bottom of the movement.

Next, exhale and press your body back up to the starting position by extending your arms fully and squeezing your chest.

Pause for a moment then lower yourself downward again and complete the desired number of repetitions.','2');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Dumbbell Incline Press', 'Adjust a bench to a 45 degree angle and sit on the bench with a dumbbell in each hand on top of your thighs and your palms facing each other.

Lie backwards on the bench while simultaneously pushing your thighs upwards to help bring the dumbbells to your shoulders. As you are bringing the dumbbells to just outside your shoulders, rotate your wrists forward so that your palms of are facing away from you.

Once the dumbbells are at your shoulders you should be lying on the bench with your feet flat on the floor. This will be your starting position.

Exhale and press the dumbbells straight above your shoulders by extending your arms and using your chest muscles. Note: Squeeze your chest in the contracted position.

Once your arms are fully extended, pause for a moment then again slowly lower the dumbbells back to the starting position at your shoulders so that your upper arm and forearm form a 90 degree angle.

Repeat for the desired number of repetitions.','2');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Chest Dip', 'At the gyms dip station, hold your body at arms length above the bars. Look for bars that are angled outwards and slightly wider than what you would typically use for tricep dips. Usually a station will have a set of parallel bars for tricep dips and another set of bars for the Chest Dip.

Lean forward about thirty (30) degrees.

Inhale and slowly lower your torso by bending at the elbows and allowing them to flare out slightly. You should lower your body until your triceps are parallel to the bars or you feel a slight stretch in the chest.

Exhale and push your body back up to the starting position while concentrating on using your chest.

Squeeze your chest at the top of the movement for a second then repeat the movement for the desired number of repetitions.','2');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Incline Chest', 'Lie on an incline bench set to a 45 degree angle with your arms out to your sides, your elbows pointing down, and your palms facing up. Hold the dumbbells at about shoulder height.

Exhale and focus on using your chest to raise the dumbbells in a wide arc above the middle of your chest until they are directly above you and facing each other.

Inhale and slowly lower the weight along the same path back to starting position.

Repeat for the desired number of repetitions.','2');

-- ARMS exercise --------------------



-- 3



---------------------------------------

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Skull Crushers', 'Lie on a flat bench with your head at one end and your feet firmly on the floor.
Grasp an EZ Curl Bar or Barbell with an overhand grip.
Raise the bar straight up over your shoulders, keeping your elbows close in.
Slowly lower the bar in an arc and stop just above over your head.
Return the bar to the starting position by fully extending your arms and bending at the elbows. Concentrate on your triceps moving the weight.','3');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
(' Zottman Bicep Curl', 'Stand with your feet shoulder width apart, your knees slightly bent and your and your abs drawn in.
Grasp a dumbbell in each hand with your palms facing each other and your arms hanging at your sides.
While keeping the upper arms stationary, curl the weights while contracting the biceps. Your wrist should rotate so that you have a supinated (palms up) grip at the top of the exercise.
Now during the contracted position with the dumbbells at should height, rotate your wrist until you now have a pronated (palms facing down) grip.
Pause for a moment and then return to the starting position by lowering the weight with the poronated (palms facing down) grip. As the dumbbells get close your thighs, start rotating your wrists so that they are back to a neutral (palms facing each other) grip.','3');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Chin Ups', 'Grasp the chin up bar with a shoulder-width supinated (underhand/palms facing up) grip and let your body hang from the bar with your arms straight.

Slowly pull yourself up so that your chin is higher than the bar.

With a controlled movement lower yourself to the starting position.','3');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Tricep Dips', 'Grasp a set of parallel bars and push yourself up to the starting position so that your arms are fully extended.
While keeping your elbows close to your body, lower yourself down until your triceps are parallel to the floor.
Slowly raise yourself back to the starting position by pushing upwards and keeping your elbows close to your body.','3');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Triceps Extension', 'Sit on a bench or short straight backed bench with your feet planted firmly on the floor and your abs drawn in.
Grasp a dumbbell with both hands with a palms up grip and raise the weight over your head to the starting position.
Lower the dumbbell in an arc from above your head to behind your back.
Push the weight with your triceps and extend your arms back to the starting position.
Repeat for the prescribed number of repetitions.','3');

-- BACK exercise --------------------



-- 4



---------------------------------------

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Pull Ups', 'Grab the bar with an overhand grip slightly wider than shoulder width apart and allow your torso to hang straight down. This is your starting position.

Begin the exercise by pulling your torso up by contracting your arms and drawing your shoulders and the upper arms down and back. You should continue to pull upwards until the bar touches your upper chest.

Pause for a moment, then inhale and return starting position by extending your arms and lowering your torso.

Repeat for the prescribed number of repetitions.','4');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Dumbbell Rows', 'Place a dumbbell on each side of a flat bench.

Place your right knee and shin on top of the end of the bench and bend your torso forward so that your upper body is parallel to the floor. You should be grasping the bench with your right hand for support.

Use the left hand to pick up the dumbbell so that your palm is facing your torso and the dumbbell is parallel the bench. Your arm should be fully extended below you and your back should be straight and still parallel to the bench. This will be your starting position.

Exhale and pull the dumbbell straight up to the side of your chest while keeping your torso stationary. Concentrate on keeping your upper arm close to your side and squeezing your shoulder blade inward as you row.

Inhale and lower the weight straight down to the starting position by again extending your arm and lowering the weight to the floor.

Repeat the exercise for the desired amount of repetitions then switch sides and repeat.','4');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Bent Over Row', 'Start with your feet a shoulder-width apart in front of the loaded barbell.

Bend over the bar until your back is almost parallel with the floor and grasp the bar with a grip just wider than shoulder width apart.

While keeping your back straight, lift the bar up so its just above the ground and youre in an athletic position with your back straight and your knees bent.

Raise the bar up towards your chest using a clean controlled motion by contracting your arms and pulling your shoulder blades together. Continue until the bar touches your lower chest.

Pause for a moment then return the bar to the starting position by extending your arms slowly and lowering the weight.','4');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Lat Pull Down', 'Attach a wide bar to a cable pull down station and sit with your knees anchored securely below the pads.
Grasp the bar with a wide overhand grip so your hands are at the outermost edge.
With your back straight and angled slightly away from the cable tower, pull the bar down to your upper chest.
Pause for a moment and then return the bar to the starting position so that your arms are again fully extended above your head.','4');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Seated Cable Row', 'Sit at a low pulley machine with your feet resting against the footrests and your knees slightly bent. You should be in an upright position with your abs tight, your back straight, and your torso perpendicular to the bench.

Lean forward slightly and grasp the pulleys then push backwards with your legs to return to your upright position.

While keeping your elbows close to your chest and your back straight, pull the handle to your body by contracting your arms and pulling your shoulder blades together.

Pause for a moment then inhale and slowly return to the starting position by extending your arms fully.

Repeat for the desired number of repetiions.','4');

-- shoulder exercise --------------------



-- 5



---------------------------------------

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Barbell Shoulder Press', 'While sitting on a bench, hold a dumbbell in each hand on top of your thighs.
Raise the dumbbells to shoulder height one at a time by kicking upwards with your thighs to create momentum and move the weights into position. As you raise the dumbbells, make sure to rotate your wrists so your palms are facing forward. This is your starting position.
To begin the lift, exhale and push the dumbbells upwards until your arms are fully extended. At the top of the repetition, try to bring the dumbbells as close as you can without them actually touching.
Pause for a moment, then inhale and slowly lower the weight back to the starting position.
Repeat for the recommended amount of repetitions.','5');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Arnold Press', 'While sitting on a bench, hold a dumbbell in each hand on top of your thighs.
Raise the dumbbells to chest height one at a time by kicking upwards with your thighs to create momentum and move the weights into position. The dumbbells should held perpendicular to your body at your shoulders with your palms facing inwards. This is your starting position.
To begin the lift, exhale and push the dumbbells upwards, fully extending your. As you press the weight, rotate your wrists outwards so that your palms are facing away from your body at the top of the repetition. The dumbbells should be very close, but not touching.
Pause for a moment, then inhale and slowly lower the weight back to the starting position, rotating your wrists inwards again as you lower the weight.
Repeat for the recommended amount of repetitions.','5');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Dumbbell Lateral Raise', 'Stand and grasp a pair of dumbbells in each hand at your sides and allow the dumbbells to rest against the sides of your legs at arms length. This will be your starting position.
While keeping your body stationary, exhale and lift the dumbbells outward to the side and up until your arm is just past parallel to the floor. During the lift, maintain only a slight bend in your elbows and keep your palms pointed down. Your wrists should be firm and straight.
Once your arms are past parallel to the floor, pause for a moment, then inhale and slowly lower the weight to the starting position.
Repeat the movement for the desired number of repetitions.','5');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Reverse Fly', 'To begin, lie face down on an bench with a pair of dumbbells in each hand and your palms facing each other (neutral grip). This is the starting position.
While maintaining a slight bend in your elbow, exhale and pull the dumbbells out and away from your side in an arcing motion until they are parallel to the floor. As you complete this motion, concentrate on only moving at the shoulder joint and squeeze your shoulder blades.
Pause for a moment then inhale and slowly lower the weights back to the starting position.
Repeat for the desired number of repetitions.','5');

INSERT INTO exercise
(name, instructions, bodypart_id)
VALUES
('Dumbbell Front Raise', 'Stand with a pair of dumbbells in each hand in front of your thighs at arms length with an overhand grip (palms facing your thighs). This will be your starting position.
While keeping your body stationary, exhale and lift the left dumbbell in front of you until your arm is just above your shoulder and past parallel to the floor. During the lift, maintain only a slight bend in your elbow and keep your palms pointed down. Your wrists should firm and straight.
Once your arm is past parallel to the floor, pause for a moment, then inhale and slowly lower the weight to the starting position.
Repeat the movement with your right arm, then continue to alternate arms until you have completed the desired number or repetitions for each arm.','5');




-- INSERT into exercise
-- (name, instructions, bodypart_id)
-- VALUES
-- ('DeadLift', 'Keep your lower back straight, core tight.', '4')