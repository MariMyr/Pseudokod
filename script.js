// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
SET variabel sum
SET variabel persons
SET variabel tip

WHILE true DO
    SET variabel tip
    IF tip >= 0 AND tip <= 1 THEN
       BREAK
    ELSE
       PRINT “Dricks måste anges som ett decmialtal mellan 0 och 1, (t.ex. 0.10 för 10%)”
    END IF
END WHILE

totalSum = sum + (sum * tip)
sumPerPerson = totalSum / persons
PRINT "Varje person ska betala:" + sumPerPerson
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel dictionary = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startWord till "FOUR";
    SET variabel endWord till "FIVE";
    SET variabel guessCount till 0

    WHILE startWord != endWord DO
        INPUT userInput
        guessCount++

        IF userInput NOT IN dictionary
            PRINT “Ordet finns inte i ordboken. Forsök igen. Du har gissat” + guessCount “gånger.”
        ELSE IF NOT isOneLetterApart(startWord, userInput)
            PRINT “Ordet skljer sig med mer än en bokstav. Forsök igen. Du har gissat” + guessCount “gånger”.
        ELSE
            SET startWord = userInput
            IF userInput === endWord
                PRINT “Grattis! Du vann på” + guessCount “gissningar!”
            ELSE
                PRINT “Du har gissat rätt! Du har gissat” + guessCount “gånger”. 
            END IF
        END IF
    END WHILE
END FUNCTION        

FUNCTION isOneLetterApart(startWord, userInput)
    IF LENGTH (startWord) != LENGTH (userInput)
        RETURN FALSE
    END IF

    SET variabel diffCount till 0
    FOR varje tecken, index 'i', from 0 TO length (startWord) -1
        IF tecken i startWord[i] != tecken i userInput[i]
            diffCount++
            IF diffCount > 1
                RETURN FALSE
            END IF
        END IF
    END FOR

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION

*/