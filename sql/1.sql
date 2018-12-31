SELECT 
    day(date) as day, 
        (select count(score) from assessments where score >= 0 and day(date) = day) as num_pos_scores, 
        (select count(score) from assessments where score < 0 and day(date) = day) as num_neg_scores 
FROM assessments 
WHERE date BETWEEN '2011-03-01 00:00:00' AND '2011-04-30 00:00:00' 
GROUP BY day