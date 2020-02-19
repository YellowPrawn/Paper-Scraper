# Paper-Scraper

 When manually adding test data, name the file "test_(INT).json" and place in ./papers. Make sure there are no duplicates file names.

# Follow standard JSON formatting and ensure you enter data as shown
   {
       "question":"QUESTION",
       "classification":"CLASSIFICATION",
       "root":"ROOT FILE",
				   "difficulty":"DIFFICULTY"
   }

Classification is case sensitive. There are no preset classifications except for those used in the sample training data

Make adjustments to test data using the amend function

If you make a mistake when inputting data, relaunch the executable

Do not put extra spaces behind text or you might break the classifier

To update the executable, find directory in console and enter command "pkg . --targets node10-win-x64"
