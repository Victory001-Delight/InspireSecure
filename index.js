const express = require('express');
const app = express();
const port = 3300;

app.use(express.json());

const quotes = [
  { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { quote: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { quote: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { quote: "Little by little, a little becomes a lot.", author: "Tanzanian Proverb" },
  { quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
  { quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { quote: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { quote: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
  { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
  { quote: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
  { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { quote: "The harder the conflict, the greater the triumph.", author: "George Washington" },
  { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { quote: "Opportunities are usually disguised as hard work.", author: "Ann Landers" },
  { quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.", author: "Eleanor Roosevelt" },
  { quote: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
  { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Don’t let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { quote: "A year from now you may wish you had started today.", author: "Karen Lamb" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Rohn" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "The man who moves a mountain begins by carrying away small stones.", author: "Confucius" },
  { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { quote: "Keep your eyes on the stars, and your feet on the ground.", author: "Theodore Roosevelt" },
  { quote: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" }
];

app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});
app.get('/api/quotes/random', (req, res) => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(random);
});

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to InspireSecure API",
        status: "Running"
    });
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
