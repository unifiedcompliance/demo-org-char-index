
jQuery(function ($) {
    $(document).ready(function() {
        let calculated = {
            'ei': {
                'value': 0,
                'field': 18,
                'underString': 'E',
                'overString': 'I'
            },
            'sn': {
                'value': 0,
                'field': 19,
                'underString': 'S',
                'overString': 'N'
            },
            'tf': {
                'value': 0,
                'field': 20,
                'underString': 'T',
                'overString': 'F'
            },
            'jp': {
                'value': 0,
                'field': 21,
                'underString': 'J',
                'overString': 'P'
            }
        };
        let threshold = 23;
        let values = [];
        let options = [
            {
                'type': 'ei',
                'label1': 'Customers',
                'label4': 'What it does best',
                'question': 'Does the organizatin pay more attention to the demands of its customers or to what it knows how to do best?'
            },
            {
                'type': 'sn',
                'label1': 'Producing / Delivering',
                'label4': 'Planning / Creating',
                'question': 'Is the organization better at producing and delivering established products and services, or at planning or creating new ones?'
            },
            {
                'type': 'tf',
                'label1': 'Systems',
                'label4': 'People',
                'question': 'Which is more important to the organization: its efficient systems or its dedicated people?'
            },
            {
                'type': 'jp',
                'label1': 'Spell out',
                'label4': 'Avoid too much detail',
                'question': 'Does the organization spell out the details of its policies and procedures, or does it avoid such detail in the name of letting people work in their own best style?'
            },
            {
                'type': 'ei',
                'label1': 'Very open',
                'label4': 'Very hidden',
                'question': "Can employees see the organization's inner workings fairly clearly, or is decision making invisible to most people -- with decisions simply appearing mysteriously?"
            },
            {
                'type': 'sn',
                'label1': 'Detailed information',
                'label4': 'Big picture',
                'question': 'Does the leadership base its decisions on detailed information about situations or on general tends and a big picture or concept of what is going on?'
            },
            {
                'type': 'tf',
                'label1': 'Official roles',
                'label4': 'Individual talent',
                'question': 'Does the organization ask of people that they fill their official roles effectively or that they excercise their individual talents fully?'
            },
            {
                'type': 'jp',
                'label1': 'Decisions',
                'label4': 'Look at every angle',
                'question': 'Would you say that the organization emphasizes reaching a decision quickly or considering things from every angle, even if it takes quite a while?'
            },
            {
                'type': 'ei',
                'label1': 'Market data',
                'label4': 'Internal factors',
                'question': 'Are decisions more often made because of market data or because of internal factors such as the beliefs of the leaders or the capacities of the facilities?'
            },
            {
                'type': 'sn',
                'label1': 'Actualities',
                'label4': 'Possibilities',
                'question': 'Does the organization more often steer its course by the actualities of the present situation or by the possibilities it perceives in the future?'
            },
            {
                'type': 'tf',
                'label1': 'Tempered head',
                'label4': 'Balanced heart',
                'question': 'How are organizational decisions really made -- with the head (tempered by humanity) or the heart (balanced by information)?'
            },
            {
                'type': 'jp',
                'label1': 'Too quickly',
                'label4': 'Too many options',
                'question': 'If the organization has a fault, is it that it locks into decisions too quickly or that it keeps too many options open for too long?'
            },
            {
                'type': 'ei',
                'label1': 'From the beginning',
                'label4': 'After the fact',
                'question': "Do the organization's people and component units collaborate naturally and from the beginning of a project or somewhat uncomfortably and after their separate positions have been established?"
            },
            {
                'type': 'sn',
                'label1': 'Steps',
                'label4': 'Vision',
                'question': 'When changes are being discussed, which gets more attention -- the step-by-step plan for getting to the destination or the vision of where things are going?'
            },
            {
                'type': 'tf',
                'label1': 'Principles',
                'label4': 'Circumstances',
                'question': 'Which are taken more seriously in dealing with personnel issues -- general principles and standards or individual circumstances and situations?'
            },
            {
                'type': 'jp',
                'label1': 'Priorities',
                'label4': 'Opportunities',
                'question': 'Does the organization more often act on the basis of set priorities or because of opportunities it discovers in its external environment?'
            },
            {
                'type': 'ei',
                'label1': 'Relations',
                'label4': 'Identity / mission',
                'question': "Is it the influence of competitors, regulators, and customers, or its own sense of its identity and mission that is more likely to dictate the organization's actions?"
            },
            {
                'type': 'sn',
                'label1': 'Reliable products',
                'label4': 'Innovative ideas',
                'question': 'Is the organization better at producing reliable products and data or at coming up with innovative ideas or designs?'
            },
            {
                'type': 'tf',
                'label1': 'Giving information',
                'label4': 'Staying in touch',
                'question': 'At the organization, does communicating mean giving informaiton to or staying in touch with its constituencies?'
            },
            {
                'type': 'jp',
                'label1': 'Procedures',
                'label4': '"As it lies"',
                'question': 'Does the organization rely on carefully established procedures or on "playing it as it lies"?'
            },
            {
                'type': 'ei',
                'label1': 'Challenges',
                'label4': 'Resources',
                'question': "Which usually determines the organization's direction -- the external challenges it faces or the internal resources it possesses?"
            },
            {
                'type': 'sn',
                'label1': 'Down to earth',
                'label4': 'Visionary',
                'question': "Is the organization's leadership better described as solid and down to earth or as intuitive and visionary?"
            },
            {
                'type': 'tf',
                'label1': 'Rational policies',
                'label4': 'Sensitive and humane',
                'question': 'Which more accurately describes the way managers are supposed to act -- following rational policies or acting sensitively and humanely?'
            },
            {
                'type': 'jp',
                'label1': 'Decide',
                'label4': 'Look for more options',
                'question': 'Does the organization more often choose to reach a decision or look for more options?'
            },
            {
                'type': 'ei',
                'label1': 'Open',
                'label4': 'Closed',
                'question': 'Is the organization fairly open to influence by employees, customers, or even the public, or is it a pretty tightly closed system?'
            },
            {
                'type': 'sn',
                'label1': 'Practicality',
                'label4': 'Ingeniously',
                'question': "Do the organization's values emphasize acting practically and reliably or ingeniously and inventively?"
            },
            {
                'type': 'tf',
                'label1': 'Logical / rational',
                'label4': 'Humane / sensitive',
                'question': 'When people in the organization talk about "the right thing to do," are they referring to the logical and rational thing or the humane and sensitive thing?'
            },
            {
                'type': 'jp',
                'label1': 'Solid ground',
                'label4': 'River of change',
                'question': "Which better describes the organization's style -- stick to solid ground or ride the river of change?"
            },
            {
                'type': 'ei',
                'label1': 'Clients / competitors',
                'label4': 'Functional / professional',
                'question': "In terms of strategy, is the organization driven by its clients' needs and its competitors' actions, or by its functional and professional capabilities?"
            },
            {
                'type': 'sn',
                'label1': 'Incrementally',
                'label4': 'Holistically',
                'question': 'When big changes must be made, does the organization prefer to deal with them incrementally (broken down into little steps) or holistically (as one integrated transformational leap)?'
            },
            {
                'type': 'tf',
                'label1': 'Tasked based',
                'label4': 'Relationship based',
                'question': 'Is the organization better described as a structure of task-based positions (where the relationships are secondary) or a system in which relationships are almost as important as tasks?'
            },
            {
                'type': 'jp',
                'label1': 'Tightly scheduled',
                'label4': 'Flexibly scheduled',
                'question': 'When projects are being planned, are they usually tightly scheduled on a fixed timetable, or flexibly scheduled on an itinerary that can change with circumstances?'
            },
            {
                'type': 'ei',
                'label1': 'Works with others',
                'label4': 'Goes it alone',
                'question': 'Does the organization work well with suppliers, joint venture partners, and professional associations, or does it prefer to go it alone?'
            },
            {
                'type': 'sn',
                'label1': 'Tried and tue',
                'label4': 'Bold new ventures',
                'question': 'Which better describes the organization -- sticking to the tried and true or undertaking bold new ventures?'
            },
            {
                'type': 'tf',
                'label1': 'Criticism',
                'label4': 'Encouragement',
                'question': "Which better describes the leader(s)' style -- criticism or encouragement?"
            },
            {
                'type': 'jp',
                'label1': 'Plan ahead',
                'label4': 'Make it up as it goes',
                'question': 'Is the organization more likely to plan ahead, or make it up as it goes along?'
            }
        ];

        $('button[name$="mb-calc"]').prop('disabled', true);
        $('button[name$="mb-calc"]').click(function (e) {
            e.preventDefault();
            $('#mb-options').hide();
            $('#mb-submit').hide();
            $('#mb-results').show();

            return false;
        });

        options.forEach(function (option, index) {
            let element = '<table cellspacing="0" cellpadding="0" class="mb-option-set">';
            element += '<thead><tr><th style="width:36%;"></th><th style="width:16%;">' + option.label1 + '<br>1</th><th style="width:16%;">2</th><th style="width:16%;">3</th><th style="width:16%;">' + option.label4 + '<br>4</th></tr></thead>';
            element += '<tbody><tr>';
            element += '<th>' + option.question + '</th>';
            for (i = 1; i <= 4; i++) {
                element += '<td><input type="radio" id="mb-' + index + '-' + i + '" class="mb-option" name="mb[' + index + ']" value="' + i + '" ></td>';
            }
            element += '</tr></tbody>';
            element += '</table>';

            $('#mb-options').append(element);

            $('input[name$="mb[' + index + ']"]').change(function () {
                if (values[index]) {
                    calculated[option.type].value = calculated[option.type].value - values[index];
                }
                values[index] = parseInt($(this).val());
                calculated[option.type].value += parseInt($(this).val());

                if (calculated[option.type].value >= threshold) {
                    $('#mb-' + option.type).val(calculated[option.type].overString);
                    $('input[name$="mb-' + calculated[option.type].field + '"]').val(calculated[option.type].overString);
                } else {
                    $('#mb-' + option.type).val(calculated[option.type].underString);
                    $('input[name$="mb-' + calculated[option.type].field + '"]').val(calculated[option.type].underString);
                }

                if (values.length && values.length === options.length) {
                    $('button[name$="mb-calc"]').prop('disabled', false);
                }
            });
        });
    });
});