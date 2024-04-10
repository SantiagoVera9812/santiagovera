for i in {1..100}; do python3 random_activities.py $(( ( RANDOM % 12 )  + 1 )) $(( ( RANDOM % 24 )  + 1 )) > Caso${i}.txt; done;

