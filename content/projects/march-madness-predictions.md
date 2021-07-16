# About

I participated in Kaggle's March Machine Learning Mania 2021, developing a
model to predict the outcome of March Madness games. I scraped decades of
historical college basketball stats, and developed a deep learning model that
took both teams' average season stats as input, and produced a probability that
either team would win. Problems with data leakage caused my model to perform
poorly, but I gained valuable skills from the experience, and have plans to
perform better next year.

# Data Leakage

My model used the average stats from a team's entire season to predict the
outcome of games. Under the assumption that these mean stats would be
representative of a team's performance, I believed the data leakage would cause
minimal problems. But I was very wrong, and by Kaggle's metric, my model
performed worse than guessing 50/50 for each game. In order to overcome this in
next year's competition, I plan to use the average stats for the teams before
each game was played, eliminating any source of data leakage.

# Feature Engineering

I used raw team averages, which provide some predictive power, but miss the full
scope of a team's performance. A team may have a high win-loss percentage for
example, but that could be because they are a strong team, or because they
played teams that tended to lose. To combat this, I generated the average stats
of the opponents' and opponents' opponents' so that the model can contextualize
a team's stats in relation to the opponents they play.

# Advanced Model Architectures

In future years, I would like to try to use a recurrent neural network. The
model would accept a sequence of stats from each game played by both teams, and
would generate abstract embeddings that quantify the relative performance of each
team. These two embeddings would be used to predict the outcome of the game.
This would extend the features the model has to beyond a simple average, while
also generating a more powerful relative ranking for teams.

It is possible that this model would vastly overfit the data, or that it would
take an absurd amount of time to train. But, I would be interested to attempt it
to explore advanced model architecture