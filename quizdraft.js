/* Questions_statement */


function select_q(q) {
    if (q == 1) {
        document.getElementById('disp').innerHTML = 'Which of the following has a height of around 800m?';
        document.getElementById('a_text').innerHTML = 'Merdeka 118';
        document.getElementById('b_text').innerHTML = 'Burj Khalifa';
        document.getElementById('c_text').innerHTML = 'Abraj Al-Bait Clock Tower';

    }
    else if (q == 2) {
        document.getElementById('disp').innerHTML = 'Which building among Top-5 was completed in the year 2015?';
        document.getElementById('a_text').innerHTML = 'Merdeka 118';
        document.getElementById('b_text').innerHTML = 'Ping An International Finance Centre';
        document.getElementById('c_text').innerHTML = 'Shanghai Tower';

    }
    else if (q == 3) {
        document.getElementById('disp').innerHTML = 'Second tallest building in china?';
        document.getElementById('a_text').innerHTML = 'Ping An International Finance Centre';
        document.getElementById('b_text').innerHTML = 'Shanghai tower';
        document.getElementById('c_text').innerHTML = 'Merdeka 118';
    }
}


/* reset_function */
/* CalledByReset */

function resett() {
    document.getElementById('disp').innerHTML = ' QuestionWillApearHere';
    document.getElementById('compdisp').innerHTML = 'Result';
    document.getElementById('a_text').innerHTML = 'optionA';
    document.getElementById('b_text').innerHTML = 'optionB';
    document.getElementById('c_text').innerHTML = 'optionC';
    document.getElementById('q1').checked = false;
    document.getElementById('q2').checked = false;
    document.getElementById('q3').checked = false;
    document.getElementById('a').checked = false;
    document.getElementById('b').checked = false;
    document.getElementById('c').checked = false;

}

/* Function_calculation */
/* called_byStartButton */

function display() {
    /* Correct_ans */
    computer = 1;
    var correct_ans = 0
    /* user_questionchoice */

    if (document.getElementById('q1').checked) {
        q_selected = 1     /* question1 */

    }

    else if (document.getElementById('q2').checked) {
        q_selected = 2/* question2 */

    }
    else if (document.getElementById('q3').checked) {
        q_selected = 3/* question3 */

    }
    else {
        document.getElementById('compdisp').innerHTML = "select something please"

    }

    /* user_Anschoice */
    if (document.getElementById('a').checked) {
        a_selected = 1     /* option1 */

    }

    else if (document.getElementById('b').checked) {
        a_selected = 2/* option2 */

    }
    else if (document.getElementById('c').checked) {
        a_selected = 3/* option3 */

    }

    /* show_result */
    /* user_questionchoice */
    /*question1Selected  */

    if (q_selected == 1) {
        correct_ans = 2
        if (a_selected == 1) {
            document.getElementById('compdisp').innerHTML = "Wrong"
        }
        else if (a_selected == 2) {
            document.getElementById('compdisp').innerHTML = "Right"
        }
        else if (a_selected == 3) {
            document.getElementById('compdisp').innerHTML = "Wrong"
        }
        else { document.getElementById('compdisp').innerHTML = "select something please" }
    }
    /* question2Selected */

    else if (q_selected == 2) {
        correct_ans = 3

        if (a_selected == 1) {
            document.getElementById('compdisp').innerHTML = "Wrong"

        }
        else if (a_selected == 2) {
            document.getElementById('compdisp').innerHTML = "Wrong"
        }
        else if (a_selected == 3) {
            document.getElementById('compdisp').innerHTML = "Right"
            
        }
        else { document.getElementById('compdisp').innerHTML = "select an option please" }

    }
    /* question3Selected */

    else if (q_selected == 3) {
        correct_ans = 1

        if (a_selected == 1) {
            document.getElementById('compdisp').innerHTML = "Right"

        }
        else if (a_selected == 2) {
            document.getElementById('compdisp').innerHTML = "Wrong"
        }
        else if (a_selected == 3) {
            document.getElementById('compdisp').innerHTML = "Wrong"
        }
        else { document.getElementById('compdisp').innerHTML = "select  an option please" }
    }
}

/* jquery animate */

$(document).ready(function () {
    $("#submitbt").click(function () {
        var div = $("#compdisp");
        div.animate({
            opacity: '0.5',
        });
        div.animate({
            opacity: '1',
        });
    });
});

