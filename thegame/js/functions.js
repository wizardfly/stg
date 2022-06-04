/*
// - - - - - - - - - - - - - - - - - - -
// S T G - S T R E E T  G A M E
// - - - - - - - - - - - - - - - - - - -
// v.00bond (a wizard company)
// - - - - - - - - - - - - - - - - - - -
// #wf-202202112257
// #wf-202206041243
// - - - - - - - - - - - - - - - - - - -
// WIZARD FLY [adonis vieira]
// http://wizrdfly.rf.gd
// http://wfly.rf.gd
// - - - - - - - - - - - - - - - - - - -
*/
// A
// W I Z A R D f l y
// A P P L I C A T I O N
// - - - - - - - - - - - - - - - - - - - -
var Wapp = Wapp || {};
// - - - - - - - - - - - - - - - - - - - -
// M O D U L E
// - - - - - - - - - - - - - - - - - - - -
// STG (street game)
// - - - - - - - - - - - - - - - - - - - -
Wapp.STG = Wapp.STG || {};

(function (win, doc, Vars) {
    'use strict';

    /* private Vars */
    Vars = {
        // :: select language :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        slcLanguage         : doc.querySelectorAll('.slcLanguage')[0],
        // :: select quality ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        inpEffects          : doc.querySelectorAll('input[name="effects"]'),
        // :: select cursor :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        inpCursor           : doc.querySelectorAll('input[name="cursor"]'),
        // :: box music player ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxMusicPlayer      : doc.querySelectorAll('.section.music')[0],
        // :: music player ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        musicPlayer         : doc.querySelectorAll('.section.music audio.music')[0],
        // :: music progress ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        musicBar            : doc.querySelectorAll('.section.music .progressBar .seekbar')[0],
        // :: music cover :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // musicCover          : doc.querySelectorAll('.section.music .mCover')[0],
        // :: music button play :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // musicPlay           : doc.querySelectorAll('.section.music ul.playlist li a.mPlay'),
        // :: music button pause ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // musicPause          : doc.querySelectorAll('.section.music ul.playlist li a.mPause')[0],
        // :: music button show list ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        musicList           : doc.querySelectorAll('.section.music ul li a.mList')[0],
        // :: music box playlist ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        musicPlaylist       : doc.querySelectorAll('.section.music ul.playlist')[0],
        // :: music playlist api ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        musicApi            : 'thegame/api/musics.json',
        // :: offers api ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        offersApi           : 'thegame/api/offers.json',
        // :: box offers ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxOffers           : doc.querySelectorAll('.bannersOffers ul')[0],
        // :: box controls mobile :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        controlsMob         : doc.querySelectorAll('.controlsMob')[0],
        // :: position touch start controls mobile ::::::::::::::::::::::::::::::::::::::::::::::::::::
        posTouchStart       : 0,
        // :: box start game ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxStart            : doc.querySelectorAll('.startScreen')[0],
        // :: button start game :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        btnStart            : doc.querySelectorAll('.startScreen a.start')[0],
        // :: button change player [skin] :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        btnPlayer           : doc.querySelectorAll('.controls .btnChangePlayer')[0],
        // :: button change map [background] ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        btnMap              : doc.querySelectorAll('.controls .btnChangeBg')[0],
        // :: box nuke ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxNuke             : doc.querySelectorAll('.game .bgNuke')[0],
        // :: box uranium :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxUranium          : doc.querySelectorAll('.game .bgNuke .uranium')[0],
        // :: box cards :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxCards            : doc.querySelectorAll('.game .bgCards')[0],
        // :: box fruits ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxFruit            : doc.querySelectorAll('.game .bgFruits')[0],
        // :: box plataform :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxPlataform        : doc.querySelectorAll('.game .bgPlataform')[0],
        // :: button create fruit :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        btnFruit            : doc.querySelectorAll('.controls .btnCreateFruit')[0],
        // :: images all fruits :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        fruitsItems : [
            'bg-almonds',
            'bg-apple_green',
            'bg-apple_red',
            'bg-apple_yellow',
            'bg-asparagus',
            'bg-avocado_whole',
            'bg-avocado_half',
            'bg-baguette',
            'bg-bagel',
            'bg-banana',
            'bg-bacon',
            'bg-beet',
            'bg-bell_pepper_green',
            'bg-bell_pepper_red',
            'bg-bell_pepper_yellow',
            'bg-blueberries',
            'bg-bread_loaf_brown',
            'bg-bread_loaf_white',
            'bg-breadroll',
            'bg-breadstick',
            'bg-broccoli',
            'bg-burger',
            'bg-burrito',
            'bg-butter',
            'bg-cabbage',
            'bg-cake_slice_chocolate',
            'bg-cake_slice_plain',
            'bg-cake_whole_chocolate',
            'bg-cake_whole_plain',
            'bg-candy_cane',
            'bg-candy_corn',
            'bg-canned_food_1',
            'bg-canned_food_2',
            'bg-canned_food_3',
            'bg-canned_food_4',
            'bg-cantaloupe_slice',
            'bg-cantaloupe_whole',
            'bg-carrot',
            'bg-cauliflower',
            'bg-celery',
            'bg-cheese',
            'bg-cheese_puffs',
            'bg-cherries',
            'bg-chestnut',
            'bg-chicken_drumstick_cooked',
            'bg-chicken_drumstick_raw',
            'bg-chicken_nuggets',
            'bg-chili_pepper_green',
            'bg-chili_pepper_red',
            'bg-chocolate',
            'bg-churro',
            'bg-cinnamon',
            'bg-coconut_half',
            'bg-coconut_whole',
            'bg-cookie',
            'bg-corn',
            'bg-corn_maize_blue',
            'bg-corn_maize_red',
            'bg-crab_legs',
            'bg-cranberries',
            'bg-croissant',
            'bg-cucumber',
            'bg-cupcake_chocolate',
            'bg-cupcake_vanilla',
            'bg-dango',
            'bg-doughnut_chocolate',
            'bg-doughnut_pink',
            'bg-doughnut_pink_sprinkles',
            'bg-dumpling',
            'bg-durian',
            'bg-egg_fried',
            'bg-egg_whole_blue',
            'bg-egg_whole_brown',
            'bg-egg_whole_white',
            'bg-eggplant',
            'bg-falafel',
            'bg-fig',
            'bg-fish_fillet',
            'bg-flan',
            'bg-fish_sticks',
            'bg-fortune_cookie',
            'bg-flatbread',
            'bg-french_fries',
            'bg-fruitcake',
            'bg-garbanzo_beans',
            'bg-garlic',
            'bg-ginger',
            'bg-gingerbread_man',
            'bg-grapes_green',
            'bg-grapes_purple',
            'bg-gulab_jamun',
            'bg-ham',
            'bg-honey_pot',
            'bg-hotdog',
            'bg-icecream_chocolate',
            'bg-icecream_mint',
            'bg-jalebi',
            'bg-jello',
            'bg-icecream_vanilla',
            'bg-kale',
            'bg-kiwi',
            'bg-lemon',
            'bg-lemon_lime',
            'bg-lettuce',
            'bg-lollipop',
            'bg-lychee',
            'bg-macaroni',
            'bg-mango',
            'bg-mochi',
            'bg-moon_cake',
            'bg-muffin_blueberry',
            'bg-muffin_plain',
            'bg-mushroom',
            'bg-narutomaki',
            'bg-octopus',
            'bg-olives_black',
            'bg-olives_green',
            'bg-onion_brown',
            'bg-onion_purple',
            'bg-onionrings',
            'bg-orange',
            'bg-oyster',
            'bg-pancakes',
            'bg-pea_pod',
            'bg-peach',
            'bg-peanut',
            'bg-pear',
            'bg-peppermint',
            'bg-persimmon',
            'bg-pie_cherry_slice',
            'bg-pie_cherry_whole',
            'bg-pie_pumpkin_slice',
            'bg-pie_pumpkin_whole',
            'bg-pineapple',
            'bg-pistachios',
            'bg-pizza_cheese_slice',
            'bg-pizza_cheese_whole',
            'bg-pizza_pepperoni_slice',
            'bg-pizza_pepperoni_whole',
            'bg-pizza_vegetable_slice',
            'bg-pizza_vegetable_whole',
            'bg-plum',
            'bg-pomegranate',
            'bg-popcorn',
            'bg-popsicle',
            'bg-potato',
            'bg-pretzel',
            'bg-pumpkin',
            'bg-quiche',
            'bg-radish',
            'bg-raisins',
            'bg-rice_ball',
            'bg-rice_cracker',
            'bg-rubus_blackberry',
            'bg-rubus_raspberry',
            'bg-samosa',
            'bg-sandwich',
            'bg-sausage',
            'bg-scallions',
            'bg-shrimp',
            'bg-shrimp_fried',
            'bg-soup_beet',
            'bg-soup_miso',
            'bg-soup_mushroom',
            'bg-soup_pea',
            'bg-spinach',
            'bg-squash',
            'bg-steak_grilled',
            'bg-steak_raw',
            'bg-strawberry',
            'bg-stuffed_pita',
            'bg-sushi_inari',
            'bg-sushi_nigiri',
            'bg-sushi_roll',
            'bg-taco',
            'bg-tamale',
            'bg-taro',
            'bg-tofu',
            'bg-tomato',
            'bg-turnip',
            'bg-ube',
            'bg-umbrella_fruit',
            'bg-unagi',
            'bg-vanilla',
            'bg-waffle',
            'bg-watermelon_slice',
            'bg-watermelon_whole',
            'bg-yam'
        ],
        // :: amount collect fruit ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        fruitCount          : 0,
        // fruitCount          : 0,
        // :: amount array create fruit :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // fruitArray          : [],
        // :: position background :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        bgPos               : 0,
        // :: box speed :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxSpeed            : doc.querySelectorAll('.content .status .info .speed span')[0],
        // :: percent speed value :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        percentSpeed        : 0,
        // :: sounds ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        audio               : doc.querySelectorAll('.game .sounds')[0],
        // :: status ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        status              : doc.querySelectorAll('.content .status')[0],
        // --------------------------------------------------
        // ##################################################
        // SOUNDS [CREATE CORRECT EVENTS for SOUNDS, please!]
        // ##################################################
        // --------------------------------------------------
        // :: sounds files ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        audioFiles          : [
            // 'thegame/audio/dog-01.mp3',
            // 'thegame/audio/dog-01.mp3',
            // 'thegame/audio/dog-02.mp3',
            // 'thegame/audio/cat-01.mp3',
            // 'thegame/audio/bird-01.mp3',
            // 'thegame/audio/bird-02.mp3',
            // ----------------------------
            // 'alien01 sprAlien01 idle',
            // 'dog01 sprDog01 idle',
            // 'dog02 sprDog02 idle',
            // 'cat01 sprCat01 idle',
            // 'bird01 sprBird01 idle',
            // 'bird02 sprBird02 idle',
            // 'alien02 sprAlien02 idle',
            // 'alien03 sprAlien03 idle',
            // ----------------------------
            'thegame/audio/coin-01.mp3',
        ],
        // --------------------------------------------------
        // :: sounds amount :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        audioAmount         : 0,
        // :: backgrounds :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        bg                  : doc.querySelectorAll('.game .bg'),
        // :: player ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        player              : doc.querySelectorAll('.game .player')[0],
        // :: box player select :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // boxPlayerSlc        : doc.querySelectorAll('.game .pSelect ul')[0],
        boxPlayerSlc        : doc.querySelectorAll('.playerSlc')[0],
        // :: box background select :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxBackgroundSlc    : doc.querySelectorAll('.backgroundSlc')[0],
        // :: box music select ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxMusicSlc         : doc.querySelectorAll('.musicSlc')[0],
        // :: death :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        death               : doc.querySelectorAll('.game .sprDeath')[0],
        // :: player skins ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        skins               : [
            'cat01 sprCat01 idle',
            'dragons01 sprDragons01 idle',
            'haohmaru01 sprHaohmaru01 idle',
            'shiki01 sprShiki01 idle',
            'yomi01 sprYomi01 idle',
            'felicia01 sprFelicia01 idle',
            'dog01 sprDog01 idle',
            'dog02 sprDog02 idle',
            'alien01 sprAlien01 idle',
            // -----
            'smDragon01 sprSmDragon01 idle',
            'demon01 sprDemon01 idle',
            'hyena01 sprHyena01 idle',
            'snake01 sprSnake01 idle',
            // 'dog01 sprDog01 idle',
            // -----
            // 'dog02 sprDog02 idle',
            // -----
            // 'cat01 sprCat01 idle',
            'bird01 sprBird01 idle',
            'bird02 sprBird02 idle',
            'vulture01 sprVulture01 idle',
            'alien02 sprAlien02 idle',
            'alien03 sprAlien03 idle',
            // -----
            'iori01 sprIori01 idle',
            'darkHorseman01 sprDarkHorseman01 idle',
            'maiShiranui01 sprMaiShiranui01 idle',
        ],
        // :: player skins selected :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        skinsSelected       : 0,
        // :: player name :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        names               : [
            'Persa Catch',
            'Dragons Child',
            'Haohmaru Shodown',
            'Shiki Kagura',
            'Yomi Kagura',
            'Felicia Catwoman',
            'Dobe Doggy',
            'Shelba Inu',
            'Dude Monster',
            // -----
            'Small Dragon',
            'Chinelk Rosin',
            'Shenzi Scar ',
            'Twin Snkes',
            // 'Dobe Doggy',
            // -----
            // 'Shiba Inu',
            // -----
            // 'Persa Catch',
            'Asa Branca',
            'Corvus Corax',
            'Buzz Buzzard',
            'Owlet Monster',
            'Pink Monster',
            // -----
            'Iori Yagami',
            'Dark Horseman',
            'Mai Shiranui',
        ],
        // :: movement player :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // move                : true,
        // :: move animation speed ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        mSpeed              : 0.13, // 0.13 normal | 0.5 fast
        // :: movement bg :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        keyd                : true,
        // :: box texts INFOS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxIconsTexts       : doc.querySelectorAll('.section.modals .list h4, .section.modals .list a'),
        // :: show hide boxes :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        btnShowHide         : doc.querySelectorAll('.btnShowHide'),
        // :: message bg ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        msgBg               : false,
        // :: box nuke bg :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        nukeBg              : false,
        // :: box fruits bg :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        fruitsBg            : false,
        // :: box cards bg ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        cardsBg             : false,
        // :: box plataform bg ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        plataformBg         : false,
        // :: box store :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxMsg              : doc.querySelectorAll('.boxGame .bgStore')[0],
        // :: box message :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        boxMsgTips          : doc.querySelectorAll('.game .msg')[0],
        // :: box message img :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // boxMsgMail          : doc.querySelectorAll('.game .msg img')[0],
        // :: box message text ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // boxMsgText          : doc.querySelectorAll('.game .msg p')[0],
        // :: konami code :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        code                : false,
        // :: konami code list ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        kCode               : [
            38,
            38,
            40,
            40,
            37,
            39,
            37,
            39
        ],
        // :: konami code amount ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        kAmount             : 0,
        // :: navigation controls :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // keys                : doc.querySelectorAll('.controls .key'),
        keys                : doc.querySelectorAll('.key'),
        // :: devices events ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        deviceEvents        : {
            'desktop' : {
                'click'         : 'click',
                'mousedown'     : 'mousedown',
                'mousemove'     : 'mousemove',
                'mouseup'       : 'mouseup',
                'keydown'       : 'keydown',
                'keyup'         : 'keyup',
                'selectstart'   : 'selectstart',
                'contextmenu'   : 'contextmenu',
                'mouseenter'    : 'mouseenter',
                'mouseout'      : 'mouseout',
            },
            // --------------------------------------------------
            // ##################################################
            // BUG [CREATE CORRECT EVENTS for MOBILE, please!]
            // ##################################################
            // --------------------------------------------------
            'mobile' : {
                'click'         : 'click', // not mobile
                'mousedown'     : 'touchstart',
                'mousemove'     : 'touchmove',
                'mouseup'       : 'touchend',
                // 'keydown'       : 'keydown', // not mobile
                // 'keyup'         : 'keyup', // not mobile
                // 'selectstart'   : 'selectstart', // not mobile
                // 'contextmenu'   : 'contextmenu', // not mobile
                'mouseenter'    : 'touchcancel',
                'mouseout'      : 'touchleave',
            }
            // --------------------------------------------------
        },
        // :: device client [desktop | mobile] ::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        deviceClient        : '',
        // :: store event keyCode :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        eventHeld           : {
            keyCode : '0'
        },
        // :: first event [for audio player] ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        firstEvent          : true,
        // :: backgrounds :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        backgrounds         : {
            'bg-horizontal-2d-3' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png',
                'bg-08.png'
            ],
            'bg-nature-florest' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-04-01.png',
                'bg-05.png',
                'bg-06.png',
                'bg-06-01.png',
                'bg-07.png',
                'bg-08.png',
                'bg-09.png',
            ],
            'bg-summer-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png',
            ],
            'bg-cartoon-platformer-2' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png'
            ],
            'bg-desert-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png'
            ],
            'bg-horizontal-2d-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png'
            ],
            'bg-horizontal-2d-2' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png',
                'bg-08.png',
                'bg-09.png'
            ],
            'bg-horizontal-2d-4' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-cartoon-forest-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-cartoon-forest-2' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-cartoon-forest-3' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-cartoon-platformer-4' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png',
                'bg-08.png',
                'bg-09.png'
            ],
            'bg-cartoon-forest-4' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-florest-nice-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png'
            ],
            'bg-cartoon-platformer-3' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png'
            ],
            'bg-cartoon-platformer' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png'
            ],
            'bg-green-zone-night' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-green-zone' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-industrial-zone' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-desert-scrolling-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-desert-scrolling-2' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png'
            ],
            'bg-halloween-1' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png',
                'bg-07.png'
            ],
            'bg-halloween-2' : [
                'bg-01.png',
                'bg-02.png',
                'bg-03.png',
                'bg-04.png',
                'bg-05.png',
                'bg-06.png'
            ]
        },
        // :: position terrain ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        posTerrain          : {
            'bg-horizontal-2d-3'        : '25px',
            'bg-nature-florest'         : '35px',
            'bg-summer-1'               : '40px',
            'bg-cartoon-platformer-2'   : '46px',
            'bg-desert-1'               : '41px',
            'bg-horizontal-2d-1'        : '20px',
            'bg-horizontal-2d-2'        : '25px',
            'bg-horizontal-2d-4'        : '20px',
            'bg-cartoon-forest-1'       : '16px',
            'bg-cartoon-forest-2'       : '16px',
            'bg-cartoon-forest-3'       : '16px',
            'bg-cartoon-platformer-4'   : '22px',
            'bg-cartoon-forest-4'       : '16px',
            'bg-florest-nice-1'         : '45px',
            'bg-cartoon-platformer-3'   : '58px',
            'bg-cartoon-platformer'     : '60px',
            'bg-green-zone-night'       : '20px',
            'bg-green-zone'             : '20px',
            'bg-industrial-zone'        : '20px',
            'bg-desert-scrolling-1'     : '24px',
            'bg-desert-scrolling-2'     : '24px',
            'bg-halloween-1'            : '34px',
            'bg-halloween-2'            : '31px'
        },
        // :: box message :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // speed            : doc.querySelectorAll('.changeBg')[0],
        // --------------------------------------------------------------------------
        // :: REMOVE only for [DEBUGS] ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        // :: box message :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        changeBg            : doc.querySelectorAll('.changeBg')[0],
        bgSelected          : 0,
        // --------------------------------------------------------------------------
        // :: offers ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        offers : [
            {
                // "sku": "90AX01B2-M01110",
                // "name": "Smartphone ASUS Zenfone Max Pro (M2) 6GB/64GB Black Saphire",
                // "price": "1799.0",
                // "link": "https://redir.lomadee.com/v2/direct/aHR0cHM6Ly9ici5zdG9yZS5hc3VzLmNvbS9hc3VzLXplbmZvbmUtbWF4LXByby1tMi02Z2ItNjRnYi1ibGFjay1zYXBoaXJlLWFnLTEtNC0xMDA1NzM3Lmh0bWw=/37459084/5798",
                // "thumbnail": "https://br.store.asus.com/media/catalog/product/z/e/zenfonemaxpro_m2__zb631kl_blue_front_1.png",
                // "description": "#html-body [data-pb-style=PMX3NRV]{justify-content:flex-start;display:flex;flex-direction:column;background-position:left top;background-size:cover;background-repeat:no-repeat;background-attachment:scroll;border-style:none;border-width:1px;border-radius:0;margin:0 0 10px;padding:10px}#html-body [data-pb-style=TWW1SGF]{border-width:1px;border-radius:0}#html-body [data-pb-style=N3HERH2],#html-body [data-pb-style=TWW1SGF]{margin:0;padding:0;border-style:none}#html-body [data-pb-style=H6AERPU],#html-body [data-pb-style=LNP8CJW]{border-style:none;border-width:1px;border-radius:0;max-width:100%;height:auto}@media only screen and (max-width: 768px) { #html-body [data-pb-style=N3HERH2]{border-style:none} }O novíssimo ZenFone Max Pro (M2) ZB631KL aproveita o desempenho épico da plataforma móvel Snapdragon™ 660 para lhe dar o poder de conseguir tudo o que você quiser fazer. Sua poderosa bateria de 5000mAh é perfeita para jogar sem interrupções ou assistir filmes, e o telefone está impecavelmente protegido por Corning® Gorilla® Glass 6 na tela de 6,26 polegadas Full HD+. O sistema de câmera dupla com inteligência artificial, com seu principal sensor Sony®, sempre captura fotos fantásticas para cada objeto - dia ou noite, retratos ou paisagens - sem que você tenha que se preocupar com isso! O ZenFone Max Pro (M2) é o seu companheiro duradouro e inteligente, construído para ir longe.   Apesar de elegante por fora, dentro do ZenFone Max Pro (M2) há um monstro. Sua bateria de alta capacidade de 5.000mAh tem força para durar mais do que você jamais imaginou: perder-se em jogos sem interrupções, mergulhar em filmes intermináveis ou simplesmente navegar ou conversar o tempo que quiser. Com o ZenFone Max Pro (M2), você está no controle do seu tempo.   O ZenFone Max Pro (M2) é equipado com a poderosa plataforma Qualcomm® Snapdragon™ 660, incorporando o Qualcomm AI Engine, para um desempenho suave, ágil e eficiente no consumo de energia. Ele oferece ao ZenFone Max Pro (M2) um desempenho fluido, proporcionando a melhor experiência em jogos e multitarefas para dispositivos móveis, facilitando o que você desejar fazer.   O sistema inteligente de câmera dupla do ZenFone Max Pro (M2) pensa por você. Com avançada detecção de cena AI, você pode se concentrar no objeto e obter resultados perfeitos o tempo todo, além de gravação de vídeos estabilizados (EIS). O ZenFone Max Pro (M2) revoluciona a fotografia móvel, oferecendo uma maneira mais simples e inteligente de capturar e compartilhar todos os momentos mágicos.   O ZenFone Max Pro (M2) é o primeiro ZenFone a usar o mais recente Corning® Gorilla® Glass 6, projetado para suportar múltiplas quedas de até 1 metro. O ZenFone Max Pro (M2) parece incrível, e é projetado para continuar assim!   Novo ZenFone Max Pro (M2): Mais desempenho. Mais beleza. Mais diversão.     Aviso legal:   1. Calculado para um cenário de utilização de 48 horas sendo: 30% de tempo de conversação, 20% de navegação na Web, 40% de reprodução de áudio, 10% de reprodução de vídeo. O tempo de espera e o tempo de uso foram baseados nos resultados dos testes de laboratório da ASUS, calculados a partir do consumo atual e da capacidade padrão da bateria. Os resultados podem variar de acordo com as condições de teste e uso. 2. Comparação de desempenho entre o ZenFone Max Pro (M2) com o Snapdragon 660 e o ZenFone 4 Max Pro com o Snapdragon 430 3. Nos testes de laboratório da Corning, o Corning® Gorilla® Glass 6 foi projetado para sobreviver 15 quedas consecutivas, em média, de 1M em superfícies ásperas e é até 2x melhor do que o Gorilla Glass 5. Acesse http://www.corning.com para obter detalhes.",
                // "installment": []
            }
        ]
    };

    /* init all functions */
    Wapp.STG.Init = function (e) {
        console.log('STG - STREET GAME [init]');

        // console.log('Vars.backgrounds', Vars.backgrounds);
        // console.log('Vars.posTerrain', Vars.posTerrain);

        /*
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // EDIT INFOS IN BLOG
        // create blog?
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        */

        /*
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // CREATE LOADER RESOURCES INFOS IN LOADING
        // show infos details, filename and size 'kbps'
        // ----------------------------------------------------------
        var
            resources = window.performance.getEntriesByType("resource");

        resources.forEach(function (resource) {
            console.log(resource.name);
        });
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        */

        /*
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // CREATE RULES
        // FOR CHANGE BACKGROUND AND PLAYERS by COLLECT AMOUNT FRUITS
        // ----------------------------------------------------------
        Wapp.STG.ChangeStyles(e);
        Wapp.STG.ChangeBg(e);
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        // ----------------------------------------------------------
        */

        // console.log('---------------');
        // console.log('!!!IMPORTANT!!!');
        // console.log('> verify mouse out/leave for STOP move');
        // console.log('> removed device mobile - keys error');
        // console.log('---------------');

        // console.log('Vars', Vars);
        // console.log('Vars.btnFruit', Vars.btnFruit);

        // --------------------------------------------------
        // ##################################################
        // BUG [CREATE CORRECT EVENTS for MOBILE, please!]
        // ##################################################
        // --------------------------------------------------
        // detect device
        Wapp.STG.Device();
        // --------------------------------------------------

        // -----------------------------------------------
        // CREATE CORRECT preloaders for IMAGES and SOUNDS
        // -----------------------------------------------
        // preloaders
        // Wapp.STG.Preloaders();
        console.log('DISABLED > Wapp.STG.Preloaders');
        // -----------------------------------------------

        // console.log('DISABLED create FRUITS');

        // add ICON fruit in text INFOS
        Wapp.STG.IconsInfo();
        // console.log('DISABLED > Wapp.STG.IconsInfo');

        // -----------------------------------------------------
        // change background (set first background)
        Wapp.STG.ChangeBg(e);
        // console.log('DISABLED CHANGE BG for matrix background');
        // create MATRIX BACKGROUND
        // Wapp.STG.MatrixBg(e);
        // -----------------------------------------------------

        // create modal players select (for STORE)
        Wapp.STG.CreatePlayerSelect();
        // console.log('DISABLED > Wapp.STG.CreatePlayerSelect');

        // create modal backgrounds select (for STORE)
        Wapp.STG.CreateBackgroundSelect();
        // console.log('DISABLED > Wapp.STG.CreateBackgroundSelect');

        // create modal musics select (for STORE)
        // Wapp.STG.CreateMusicSelect();

        // create musics playlist
        Wapp.STG.CreateMusicPlaylist();

        // create offers banners
        Wapp.STG.CreateOffers();

        // all listeners
        Wapp.STG.Listen();

        // offers
        // Wapp.STG.Offers();
        console.log('DISABLED > Wapp.STG.Offers');

        // slider - carousel
        // Wapp.STG.Sliders();
        console.log('DISABLED > Wapp.STG.Sliders');
    };

    /* for all events listeners */
    Wapp.STG.Listen = function () {
        // console.log(':: Listen [fnc]');

        // ----------------------------
        // DEBUG create randomic fruits
        // ----------------------------
        /*
        if (Vars.btnFruit) {
            // console.log('Vars.btnFruit HAVE', Vars.btnFruit);
            // Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['click'], Vars.btnFruit, Wapp.STG.CreateFruit, true);
            (Vars.btnFruit) ? Vars.btnFruit.addEventListener('click', Wapp.STG.CreateFruit, true) : '';
        }
        */

        // --------------------------
        // DEBUG change player [skin]
        // --------------------------
        if (Vars.btnPlayer) {
            (Vars.btnPlayer) ? Vars.btnPlayer.addEventListener('click', Wapp.STG.ChangePlayer, true) : '';
        }

        // --------------------------
        // DEBUG change player [skin]
        // --------------------------
        if (Vars.boxUranium) {
            (Vars.boxUranium) ? Vars.boxUranium.addEventListener('click', Wapp.STG.NukeClick, true) : '';
        }

        // -----------------------------
        // DEBUG change map [background]
        // -----------------------------
        if (Vars.btnMap) {
            (Vars.btnMap) ? Vars.btnMap.addEventListener('click', Wapp.STG.ChangeBg, true) : '';
        }

        // :: button start game
        (Vars.btnStart) ? Vars.btnStart.addEventListener('click', Wapp.STG.StartGame, true) : '';
        // console.log('Wapp.STG.StartGame DISABLED');

        // :: button show playlist
        (Vars.musicList) ? Vars.musicList.addEventListener('click', Wapp.STG.MusicPlaylist, true) : '';

        // :: button music play
        // Wapp.STG.AddEvents('click', Vars.musicPlay, Wapp.STG.MusicControls, true);

        // :: select quality
        Wapp.STG.AddEvents('change', Vars.inpEffects, Wapp.STG.ChangeQuality, true);

        // :: select cursor
        Wapp.STG.AddEvents('change', Vars.inpCursor, Wapp.STG.ChangeCursor, true);

        // :: select language [translate]
        (Vars.slcLanguage) ? Vars.slcLanguage.addEventListener('change', Wapp.STG.ChangeLanguage, true) : '';

        /*
        // :: navigation controls
        Wapp.STG.AddEvents(Wapp.STG.Device('click'), 'class', Vars.keys, Wapp.STG.Controls, true);
        Wapp.STG.AddEvents(Wapp.STG.Device('mousedown'), 'class', Vars.keys, Wapp.STG.Controls, true);
        Wapp.STG.AddEvents(Wapp.STG.Device('mouseup'), 'class', Vars.keys, Wapp.STG.Controls, true);
        Wapp.STG.AddEvents(Wapp.STG.Device('mousemove'), 'class', Vars.keys, Wapp.STG.Controls, true);
        // Wapp.STG.AddEvents(Wapp.STG.Device('mouseenter'), 'class', Vars.keys, Wapp.STG.Controls, true);
        // Wapp.STG.AddEvents(Wapp.STG.Device('mouseout'), 'class', Vars.keys, Wapp.STG.Controls, true);
        // win.addEventListener(Wapp.STG.Device('mousemove'), Wapp.STG.Controls, true);
        // win.addEventListener(Wapp.STG.Device('mouseenter'), Wapp.STG.Controls, true);
        // win.addEventListener(Wapp.STG.Device('mouseout'), Wapp.STG.Controls, true);
        win.addEventListener(Wapp.STG.Device('selectstart'), Wapp.STG.Controls, true);
        win.addEventListener(Wapp.STG.Device('selectionchange'), Wapp.STG.Controls, true);
        win.addEventListener(Wapp.STG.Device('contextmenu'), Wapp.STG.Controls, true);

        // :: loader
        // win.addEventListener('load', Wapp.STG.Loader, true);

        // :: disabled events
        // win.addEventListener(Wapp.STG.Device('mousemove'), Wapp.STG.Nothing, false);
        // win.addEventListener(Wapp.STG.Device('selectstart'), Wapp.STG.Nothing, false);
        // win.addEventListener(Wapp.STG.Device('selectionchange'), Wapp.STG.Nothing, false);
        // win.addEventListener(Wapp.STG.Device('contextmenu'), Wapp.STG.Nothing, false);

        // :: keyboard keydown
        win.addEventListener(Wapp.STG.Device('keydown'), Wapp.STG.Key, true);

        // :: keyboard keyup
        win.addEventListener(Wapp.STG.Device('keyup'), Wapp.STG.Key, true);

        // :: modal close
        Wapp.STG.AddEvents(Wapp.STG.Device('click'), 'class', Vars.btnShowHide, Wapp.STG.ShowHide, true);
        */

        // ---------------------------------------
        // :: loader
        // ---------------------------------------
        win.addEventListener('load', Wapp.STG.Loader, true);
        // console.log('Wapp.STG.Loader DISABLED')

        // ---------------------------------------
        // :: modal close
        // ---------------------------------------
        Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['click'], Vars.btnShowHide, Wapp.STG.ShowHide, true);

        // ---------------------------------------
        // :: disabled events
        // ---------------------------------------
        // win.addEventListener(Wapp.STG.Device('mousemove'), Wapp.STG.Nothing, false);
        // win.addEventListener(Wapp.STG.Device('selectstart'), Wapp.STG.Nothing, false);
        // win.addEventListener(Wapp.STG.Device('selectionchange'), Wapp.STG.Nothing, false);
        // win.addEventListener(Wapp.STG.Device('contextmenu'), Wapp.STG.Nothing, false);

        // ---------------------------------------
        // :: clicker effect
        // ---------------------------------------
        doc.addEventListener(Vars.deviceEvents[Vars.deviceClient]['click'], Wapp.STG.Clicker, true);

        // ---------------------------------------
        // :: kCode
        // ---------------------------------------
        // Wapp.STG.VerifyCode(e, e.keyCode);
        console.log('DISABLED > Wapp.STG.VerifyCode');

        ////////////////////////////
        // GAMEPAD /////////////////
        ////////////////////////////
        /*
        var
            // gamepad = [],
            control = '',
            checkGamepad = function (e) {
                // console.log('e', e);

                for (control of navigator.getGamepads()){
                    //console.log('gamepads', gamepad);

                    if (control) {
                        // gamepad[control.index] = control;
                        // console.log('gamepad connected', gamepad[control.index]);
                        console.log('gamepad connected', control);

                        // checkButtons(gamepad[control.index]);
                        checkButtons(control.index);
                    }
                }
            },
            loopButtons = '',
            checkButtons = function (index) {
                // console.log('control', navigator.getGamepads()[index]);
                loopButtons = setInterval(function (pos) {
                    [].forEach.call(navigator.getGamepads()[pos].buttons, function (btn, i) {
                        // console.log('btn', btn);

                        if ((btn.pressed !== false) || (btn.touched !== false) || (btn.value !== 0)) {
                            console.log('btn', btn);
                            console.log('btn index', i);
                        }
                    });
                }, 100, index);
            };

        window.addEventListener('gamepadconnected', checkGamepad, true);
        */
        ////////////////////////////
    };

    /* add one or more events */
    Wapp.STG.AddEvents = function (evt, el, fnc, bol) {
        // console.log(':: AddEvents [fnc]');

        [].forEach.call(el, function (block) {
            block.addEventListener(evt, fnc, bol);
        });
    };

    /* verify device client */
    Wapp.STG.Device = function (evt) {
        // console.log(':: Device [fnc]');

        // var
        //     type = '';

        // ------------------
        // device mobile
        // ------------------
        if (/Mobi|Android/i.test(navigator.userAgent) === true) {
            Vars.deviceClient = 'mobile';

            // set body class
            doc.body.classList.add('mobile');

        // ------------------
        // device desktop
        // ------------------
        } else {
            Vars.deviceClient = 'desktop';

            // set body class
            doc.body.classList.add('desktop');
        }

        // console.log('Vars.deviceClient', Vars.deviceClient);
        // console.log('device type', type);
        // console.log('device event', Vars.deviceEvents[type][evt]);

        // return Vars.deviceEvents[type][evt];
    };

    /* navigation controls mobile */
    Wapp.STG.ControlsMob = function (e) {
        // console.log(':: ControlsMob [fnc]');

        // console.log('e', e);
        // console.log('e.type', e.type);
        // console.log('e.target', e.target);

        // -------------------
        // VERIFY EVENTS TYPES
        // -------------------
        // :::::::::::::::::::
        // touchstart
        // :::::::::::::::::::
        if (e.type === 'touchstart') {
            // console.log('e.touches[0]', e.touches[0]);
            // console.log('e.touches[0].clientX FIRST', e.touches[0].clientX);
            // console.log('e.touches[0].clientY', e.touches[0].clientY);

            // disabled TIP
            if (!Vars.controlsMob.classList.contains('active')) {
                Vars.controlsMob.classList.add('active');
            }

            Vars.posTouchStart = e.touches[0].clientX;

        // :::::::::::::::::::
        // touchmove
        // :::::::::::::::::::
        } else if (e.type === 'touchmove') {
            // console.log('e.touches[0]', e.touches[0]);
            // console.log('e.touches[0].clientX', e.touches[0].clientX);
            // console.log('e.touches[0].clientY', e.touches[0].clientY);

            if (e.touches[0].clientX > Vars.posTouchStart) {
                // console.log('TOUCH MOVE RIGHT');

                // ------------------
                // ACTION events MOVE
                // ------------------
                Wapp.STG.Key(e, 'right');

            } else if (e.touches[0].clientX < Vars.posTouchStart) {
                // console.log('TOUCH MOVE LEFT');

                // ------------------
                // ACTION events MOVE
                // ------------------
                Wapp.STG.Key(e, 'left');
            }

        // :::::::::::::::::::
        // touchend
        // :::::::::::::::::::
        } else if (e.type === 'touchend') {
            // ------------------
            // ACTION events MOVE
            // ------------------
            Wapp.STG.Key(e, 'reset');
        }
        // -------------------

        e.preventDefault();
        return false;
    };

    /* navigation controls */
    Wapp.STG.Controls = function (e) {
        // console.log(':: Controls [fnc]');

        // console.log('e', e);
        // console.log('e.type', e.type);
        // console.log('e.target', e.target);
        // console.log('e.target.dataset.code', e.target.dataset.code);

        // --------------------------
        // not play audio FIRST EVENT
        // --------------------------
        // if (Vars.firstEvent === true) {
        //     console.log('FIRSTEVENT controls');
        //     Vars.firstEvent = false;
        //     return false;
        // }

        var
            evt = '',
            opt = {};

        // 'click' prevent default
        // if (e.type === Wapp.STG.Device('click')) {
        if (e.type === Vars.deviceEvents[Vars.deviceClient]['click']) {
            // console.log('run event: CLICK');
            clearInterval(Vars.loopKey);

            e.preventDefault();
            return false;

        // 'keydown' for continue
        // } else if (e.type === Wapp.STG.Device('mousedown')) {
        } else if ((e.type === Vars.deviceEvents[Vars.deviceClient]['mousedown']) || (e.type === Vars.deviceEvents[Vars.deviceClient]['mouseenter'])) {
            // console.log('run event: KEYDOWN || MOUSEENTER');

            evt = 'keydown';
            opt.keyCode = e.target.dataset.code;

            // store event
            Vars.eventHeld = {
                // evnt : evt,
                keyCode : e.target.dataset.code
            };

            // loop only in MOVE left/right
            if ((opt.keyCode != 38) && (opt.keyCode != 40)) {
                // doc.dispatchEvent(new KeyboardEvent(evt, opt));

                Vars.loopKey = setInterval(function (){
                    doc.dispatchEvent(new KeyboardEvent(evt, opt));
                }, 60);

            } else {
                doc.dispatchEvent(new KeyboardEvent(evt, opt));
            }

        // 'keyup' for stop
        // } else if (e.type === Wapp.STG.Device('mouseup')) {
        } else if ((e.type === Vars.deviceEvents[Vars.deviceClient]['mouseup']) || (e.type === Vars.deviceEvents[Vars.deviceClient]['mouseout'])) {
            // console.log('run event: KEYUP || MOUSEOUT');

            evt = 'keyup';
            opt.keyCode = e.target.dataset.code;

            clearInterval(Vars.loopKey);
            doc.dispatchEvent(new KeyboardEvent(evt, opt));

        // ---------------------------
        // NOTHING! [remove events]
        // ---------------------------
        // 'mousemove'
        // 'selectstart'
        // 'selectionchange'
        // 'contextmenu'
        } else {
            if ((e.type != 'mousemove') && (e.type != 'touchmove')) {
                // console.log('not run event:', e.type);
                // console.log('e.type', e.type);

                // ---------------------------
                // RESET EVENTS
                // ---------------------------
                clearInterval(Vars.loopKey);

                if (e.type === 'contextmenu') {
                    // ---------------------
                    // player MOVE RESET
                    // ---------------------
                    // Vars.player.classList.remove('positionLeft');
                    Vars.player.classList.remove('walk');
                    Vars.player.classList.add('idle');

                    Vars.keyd = false;
                }

                // remove events
                // Wapp.STG.Nothing(e);

                // e.preventDefault();
                // return false;

            } else {
                // if (e.type === 'mousemove') {
                //     console.log('MOUSEMMMMOVE');
                //     e.preventDefault();
                //     return false;
                // }

                // --------------------------
                // not play audio FIRST EVENT
                // --------------------------
                // if (Vars.firstEvent === true) {
                //     console.log('FIRSTEVENT', e.type);
                //     Vars.firstEvent = false;
                //     return false;
                // }
            }
        }

        // console.log('-----------------');
    };

    /* remove events */
    Wapp.STG.Nothing = function (e) {
        // console.log(':: Nothing [fnc]');

        // if (e.type != 'mousemove') {
            // console.log('e.type', e.type);
        // }

        e.preventDefault();
        return false;
    };

    /* verify keypress */
    Wapp.STG.Key = function (e, move) {
        // console.log(':: Key [fnc]');

        var
            boxEffects = '',
            htmlPlayerEffects = '',
            wI = 0,
            tRemove = 50;

        // console.log('e', e);
        // console.log(e.keyCode);

        // ------------------------
        // ::::::::::::::::::::::::
        // FOR MOBILE
        // ::::::::::::::::::::::::
        // ------------------------
        if (move) {
            // console.log('move mobile', move);

            // ------------------------------------------
            // [action] MOVE PLAYER LEFT
            // ------------------------------------------
            if (move === 'left') {
                // ---------------------
                // player MOVE LEFT
                // ---------------------
                Vars.player.classList.remove('idle');
                Vars.player.classList.add('positionLeft', 'walk', 'smokeWalk');

                Vars.keyd = true;

                // ---------------------
                // player MOVE EFFECTS
                // ---------------------
                for (wI = 0; wI < 8; wI++) {
                    // htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' walk smokeWalk positionLeft"></b>';
                    htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' ' + Vars.player.className + '" style="bottom:' + Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]] + ';"></b>';
                }

                boxEffects = doc.createElement('DIV');
                boxEffects.classList.add('boxEffects');
                boxEffects.innerHTML = htmlPlayerEffects;

                if (!doc.querySelectorAll('.boxEffects')[0]) {
                    doc.querySelectorAll('.game .boxPlayer')[0].appendChild(boxEffects);
                }
                // ---------------------

                // ---------------------
                // background MOVE LEFT
                // ---------------------
                Wapp.STG.BgMove(e, 'left');

            // ------------------------------------------
            // [action] MOVE PLAYER RIGHT
            // ------------------------------------------
            // [keyboard] RIGHT arrow
            // ------------------------------------------
            } else if (move === 'right') {
                // ---------------------
                // player MOVE RIGHT
                // ---------------------
                Vars.player.classList.remove('positionLeft', 'idle');
                // Vars.player.classList.remove('idle');
                Vars.player.classList.add('walk', 'smokeWalk');

                Vars.keyd = true;

                // ---------------------
                // player MOVE EFFECTS
                // ---------------------
                for (wI = 0; wI < 8; wI++) {
                    // htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' walk smokeWalk positionLeft"></b>';
                    htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' ' + Vars.player.className + '" style="bottom:' + Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]] + ';"></b>';
                }

                boxEffects = doc.createElement('DIV');
                boxEffects.classList.add('boxEffects');
                boxEffects.innerHTML = htmlPlayerEffects;

                if (!doc.querySelectorAll('.boxEffects')[0]) {
                    doc.querySelectorAll('.game .boxPlayer')[0].appendChild(boxEffects);
                }
                // ---------------------

                // ---------------------
                // background MOVE RIGHT
                // ---------------------
                Wapp.STG.BgMove(e, 'right');

            // ------------------------------------------
            // [action] MOVE PLAYER RESET
            // ------------------------------------------
            } else if (move === 'reset') {
                // ---------------------
                // player MOVE RESET
                // ---------------------
                // Vars.player.classList.remove('positionLeft');
                // Vars.player.classList.remove('walk', 'smokeWalk');
                Vars.player.classList.remove('walk', 'smokeWalk');
                Vars.player.classList.add('idle');

                Vars.keyd = false;

                // ---------------------
                // player MOVE EFFECTS [remove]
                // ---------------------
                if (doc.querySelectorAll('.boxEffects')[0]) {
                    [].forEach.call(doc.querySelectorAll('.walkEffect'), function (block, index) {
                        block.classList.remove('walk');
                        block.classList.add('idle');

                        setTimeout(function (blk) {
                            blk.remove();
                        }, (tRemove * (index + 1)), block);

                        if (index === (doc.querySelectorAll('.walkEffect').length - 1)) {
                            setTimeout(function () {
                                if (doc.querySelectorAll('.boxEffects')[0]) {
                                    doc.querySelectorAll('.boxEffects')[0].remove();
                                }
                            }, (tRemove * (index + 1)));
                        }
                    });
                }
                // ---------------------
            }

            e.preventDefault();
            return false;
        }
        // ------------------------

        // ------------------------
        // ::::::::::::::::::::::::
        // FOR DESKTOP
        // ::::::::::::::::::::::::
        // ------------------------
        // stop movement
        // if (Vars.move !== true) {
        //     return false;
        // }

        // --------------------------
        // not play audio FIRST EVENT
        // --------------------------
        // if (Vars.firstEvent === true) {
        //     console.log('FIRSTEVENT Key');
        //     Vars.firstEvent = false;
        //     e.preventDefault();
        //     return false;
        // }

        /*
        if (Vars.btnStart) {
            // ------------------------------------------
            // [action] START GAME
            // ------------------------------------------
            // [keyboard] SPACE
            // ------------------------------------------
            if (e.keyCode === 32) {
                console.log('keydown: SPACE');

                if (Vars.btnStart) {
                    Vars.btnStart.click();
                }
            }

            e.preventDefault();
            return false;
        }
        */

        // ::::::::::::::::::::::::::::::::::::::::::
        // [event] KEYDOWN
        // ::::::::::::::::::::::::::::::::::::::::::
        if (e.type === 'keydown') {
            // ------------------------------------------
            // [action] CHANGE BACKGROUND
            // ------------------------------------------
            // [keyboard] C
            // ------------------------------------------
            // if (e.keyCode === 67) {
                // console.log('keydown: C');

                // change background (set first)
                // Wapp.STG.ChangeBg(e);

            // ------------------------------------------
            // [action] PLAYER ATTACK
            // ------------------------------------------
            // [keyboard] UP arrow
            // ------------------------------------------
            // } else if (e.keyCode === 38) {
            if (e.keyCode === 38) {
                // console.log('keydown: UP');

                /*
                // konami code
                // remove attack player
                if (Vars.code === true) {
                    return false;
                }

                // ---------------------
                // player ATTACK
                // ---------------------
                Vars.player.classList.add('attack');


                // console.log('CREATE SOUND EVENTS');

                // ----------------
                // MANIPULATE ARRAY
                // ----------------
                // create new logic for change audio effect
                audioFiles
                'audio/dog-01.mp3',
                'audio/dog-02.mp3',
                'audio/cat-01.mp3',
                'audio/cat-01.mp3',
                'audio/bird-01.mp3',
                'audio/bird-02.mp3',

                skins
                'dog01 sprDog01 idle',
                'dog02 sprDog02 idle',
                'cat01 sprCat01 idle',
                'bird01 sprBird01 idle',
                'bird02 sprBird02 idle',
                // ----------------

                // --------------------------
                // not play audio FIRST EVENT
                // --------------------------
                // if (Vars.firstEvent === true) {
                //     console.log('FIRSTEVENT Key');
                //     Vars.firstEvent = false;
                //     e.preventDefault();
                //     return false;

                // } else {
                    // audio effect attack
                    if (Vars.player.classList.contains('dog01')) {
                        Wapp.STG.Sounds(e, Vars.audioFiles[0]);

                    } else if (Vars.player.classList.contains('dog02')) {
                        Wapp.STG.Sounds(e, Vars.audioFiles[1]);

                    } else if (Vars.player.classList.contains('cat01')) {
                        Wapp.STG.Sounds(e, Vars.audioFiles[2]);

                    } else if (Vars.player.classList.contains('bird01')) {
                        Wapp.STG.Sounds(e, Vars.audioFiles[3]);

                    } else if (Vars.player.classList.contains('bird02')) {
                        Wapp.STG.Sounds(e, Vars.audioFiles[4]);
                    }
                // }

                // Vars.move = false;

                // -----------------
                // show message text
                // -----------------
                // console.log('Vars.msgBg', Vars.msgBg);

                if (Vars.msgBg === true) {
                    // show message text
                    if (Vars.boxMsgText) {
                        Vars.boxMsgText.classList.add('active');
                    }

                    // animate mail
                    if (Vars.boxMsgMail) {
                        Vars.boxMsgMail.classList.remove('active');
                    }
                }
                // -----------------

                setTimeout(function () {
                    Vars.player.classList.remove('attack');
                    // Vars.player.classList.add('idle');
                    // Vars.move = true;
                }, 600);

                // Vars.keyd = false;
                */

            // ------------------------------------------
            // [action] CHANGE PLAYER SKINS
            // ------------------------------------------
            // [keyboard] DOWN arrow
            // ------------------------------------------
            } else if (e.keyCode === 40) {
                // console.log('keydown: DOWN');

                /*
                // konami code
                // remove change skins player
                if (Vars.code === true) {
                    return false;
                }

                // change styles
                Wapp.STG.ChangeStyles();
                */

            // ------------------------------------------
            // [action] MOVE PLAYER LEFT
            // ------------------------------------------
            // [keyboard] LEFT arrow
            // ------------------------------------------
            } else if (e.keyCode === 37) {
                // console.log('keydown: LEFT');

                // ---------------------
                // player MOVE LEFT
                // ---------------------
                Vars.player.classList.remove('idle');
                Vars.player.classList.add('positionLeft', 'walk', 'smokeWalk');

                Vars.keyd = true;

                // ---------------------
                // player MOVE EFFECTS
                // ---------------------
                for (wI = 0; wI < 8; wI++) {
                    // htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' walk smokeWalk positionLeft"></b>';
                    htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' ' + Vars.player.className + '" style="bottom:' + Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]] + ';"></b>';
                }

                boxEffects = doc.createElement('DIV');
                boxEffects.classList.add('boxEffects');
                boxEffects.innerHTML = htmlPlayerEffects;

                if (!doc.querySelectorAll('.boxEffects')[0]) {
                    doc.querySelectorAll('.game .boxPlayer')[0].appendChild(boxEffects);
                }
                // ---------------------

                // ---------------------
                // background MOVE LEFT
                // ---------------------
                Wapp.STG.BgMove(e, 'left');

            // ------------------------------------------
            // [action] MOVE PLAYER RIGHT
            // ------------------------------------------
            // [keyboard] RIGHT arrow
            // ------------------------------------------
            } else if (e.keyCode === 39) {
                // console.log('keydown: RIGHT');

                // ---------------------
                // player MOVE RIGHT
                // ---------------------
                Vars.player.classList.remove('positionLeft', 'idle');
                // Vars.player.classList.remove('idle');
                Vars.player.classList.add('walk', 'smokeWalk');

                Vars.keyd = true;

                // ---------------------
                // player MOVE EFFECTS
                // ---------------------
                for (wI = 0; wI < 8; wI++) {
                    // htmlPlayerEffects += '<b class="walkEffect wI' + wI + '"></b>';
                    htmlPlayerEffects += '<b class="walkEffect wI' + wI + ' ' + Vars.player.className + '" style="bottom:' + Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]] + ';"></b>';
                }

                boxEffects = doc.createElement('DIV');
                boxEffects.classList.add('boxEffects');
                boxEffects.innerHTML = htmlPlayerEffects;

                if (!doc.querySelectorAll('.boxEffects')[0]) {
                    doc.querySelectorAll('.game .boxPlayer')[0].appendChild(boxEffects);
                }
                // ---------------------

                // ---------------------
                // background MOVE RIGHT
                // ---------------------
                Wapp.STG.BgMove(e, 'right');
            }

        // ::::::::::::::::::::::::::::::::::::::::::
        // [event] KEYUP
        // ::::::::::::::::::::::::::::::::::::::::::
        } else if (e.type === 'keyup') {
            // konami code
            // remove events player
            // if (Vars.code === true) {
            //     return false;
            // }

            // ------------------------------------------
            // [action] PLAYER ATTACK
            // ------------------------------------------
            // [keyboard] UP arrow
            // ------------------------------------------
            if (e.keyCode === 38) {
                // console.log('keyup: UP');

            // ------------------------------------------
            // [action] CHANGE PLAYER SKINS | MOVE PLAYER LEFT | MOVE PLAYER RIGHT
            // ------------------------------------------
            // [keyboard] DOWN arrow | LEFT arrow | RIGHT arrow
            // ------------------------------------------
            } else if ((e.keyCode === 40) || (e.keyCode === 37) || (e.keyCode === 39)) {
                // ---------------------
                // player MOVE RESET
                // ---------------------
                // Vars.player.classList.remove('positionLeft');
                // Vars.player.classList.remove('walk', 'smokeWalk');
                Vars.player.classList.remove('walk', 'smokeWalk');
                Vars.player.classList.add('idle');

                Vars.keyd = false;

                // ---------------------
                // player MOVE EFFECTS [remove]
                // ---------------------
                if (doc.querySelectorAll('.boxEffects')[0]) {
                    [].forEach.call(doc.querySelectorAll('.walkEffect'), function (block, index) {
                        block.classList.remove('walk');
                        block.classList.add('idle');

                        setTimeout(function (blk) {
                            blk.remove();
                        }, (tRemove * (index + 1)), block);

                        if (index === (doc.querySelectorAll('.walkEffect').length - 1)) {
                            setTimeout(function () {
                                if (doc.querySelectorAll('.boxEffects')[0]) {
                                    doc.querySelectorAll('.boxEffects')[0].remove();
                                }
                            }, (tRemove * (index + 1)));
                        }
                    });
                }
                // ---------------------

                if (e.keyCode === 40) {
                    // console.log('keyup: DOWN');

                } else if (e.keyCode === 37) {
                    // console.log('keyup: LEFT');

                } else if (e.keyCode === 39) {
                    // console.log('keyup: RIGHT');
                }
            }

            // verify kCode
            // Wapp.STG.VerifyCode(e, e.keyCode);
            // console.log('DISABLED > Wapp.STG.VerifyCode');
        }
    };

    /* background move */
    Wapp.STG.BgMove = function (e, direction) {
        // console.log(':: BgMove [fnc]');

        // return false;

        var
            // direction = '',
            compStyles = '',
            pos = '',
            newPos = '',
            ani = '',
            pSpeed = '';

        // ---------
        // ANIMATION
        // ---------
        ani = setInterval(function () {
            if (Vars.keyd === true) {
                // -----------------------
                // increment percent speed
                // -----------------------
                // Vars.percentSpeed += 0.5;
                Vars.percentSpeed += Vars.mSpeed;

                // console.log('Vars.percentSpeed', Vars.percentSpeed);

                /*
                CALC
                ----
                (win.innerWidth / 2) = 100%
                Vars.percentSpeed = x

                (Vars.percentSpeed * (win.innerWidth / 2) / 100)
                */

                // -----------------
                // set percent value
                // -----------------
                pSpeed = parseInt((Vars.percentSpeed * (win.innerWidth / 2)) / 1000);

                if (pSpeed >= 100) {
                    pSpeed = 100;

                    // if (Vars.boxSpeed) {
                        // Vars.boxSpeed.classList.add('hue');
                    // }
                }

                // console.log('pSpeed', pSpeed);

                // -----------------------
                // change values box speed
                // -----------------------
                if (Vars.boxSpeed) {
                    Vars.boxSpeed.style.width = pSpeed + '%';
                    Vars.boxSpeed.textContent = pSpeed + '%';
                }

                [].forEach.call(Vars.bg, function (block, index) {
                    // block.classList.remove('bgLeft');
                    // block.classList.add('bgRight');

                    // console.log('block', block);
                    // console.log('index', index);

                    compStyles = win.getComputedStyle(block);
                    // console.log('compStyles', compStyles);
                    // console.log('background-position-x', compStyles.getPropertyValue('background-position-x'));

                    // ----------------------
                    // NEW POSITIONS PARALLAX
                    // ----------------------
                    if (index === 0) {
                        // newPos = 0.5;
                        newPos = Vars.mSpeed;

                        // PERCENT SPEED ?

                    } else {
                        // newPos = parseFloat(index * 0.5);
                        newPos = parseFloat(index * Vars.mSpeed);

                        // console.log('newPos', newPos);
                    }

                    // console.log('newPos >>>', newPos);

                    // ---------------
                    // VERIFY POSITION
                    // ---------------
                    if (compStyles.getPropertyValue('background-position-x') === '') {
                        // console.log('not position, ZERO');
                        pos = 0;

                        // ------------------
                        // global position bg
                        // ------------------
                        // Vars.bgPos += pos;

                    } else {
                        // console.log('position, INCREMENT');
                        pos = parseFloat(compStyles.getPropertyValue('background-position-x').replace('px', ''));

                        // ------------------
                        // global position bg
                        // ------------------
                        // Vars.bgPos = pos;
                    }

                    if (direction === 'left') {
                        // console.log('bg move LEFT');
                        pos += newPos;

                        // ------------------
                        // global position bg
                        // ------------------
                        // Vars.bgPos += newPos;

                    } else if (direction === 'right') {
                        // console.log('bg move RIGHT');
                        pos -= newPos;

                        // ------------------
                        // global position bg
                        // ------------------
                        // Vars.bgPos -= newPos;
                    }

                    // ------------------
                    // global position bg
                    // ------------------
                    Vars.bgPos  = pos;
                    // console.log('Vars.bgPos', Vars.bgPos);
                    // ------------------

                    // console.log('pos', pos);

                    /*
                    CALC
                    -----------
                    ?
                    ------------
                    win.innerWidth = 100%;
                    Vars.percentSpeed = ?
                    VALUE ?
                    */
                    // console.log('win.innerWidth', win.innerWidth);
                    // console.log('Vars.percentSpeed', Vars.percentSpeed);

                    // console.log('pos', pos);

                    // --------------
                    // set GLOBAL POS
                    // --------------
                    // console.log('EDIT GLOBAL pos');
                    // console.log('Vars.bgPos', Vars.bgPos);
                    // --------------

                    // ################################
                    // --------------------------------
                    // check POSITION FOR ENABLED BOXES
                    // --------------------------------
                    // ################################
                    // ------------
                    // ENABLE STORE
                    // ------------
                    if (pos >= 1300) {
                        // console.log('enabled BOXSTORE');
                        Vars.msgBg = true;
                    }

                    // -----------------
                    // ENABLE BOX FRUITS
                    // -----------------
                    // player IN box fruits
                    if ((pos <= -1200) && (pos >= -2800)) {
                        // console.log('enabled BOXFRUITS');
                        Vars.fruitsBg = true;

                    // player OUT box fruits
                    } else {
                        // console.log('disabled BOXFRUITS');
                        Vars.fruitsBg = false;
                    }

                    // --------------------
                    // ENABLE BOX PLATAFORM
                    // --------------------
                    if (pos <= -340) {
                        // console.log('enabled BOXPLATAFORM');
                        Vars.plataformBg = true;
                    }

                    // ----------------
                    // ENABLE BOX CARDS
                    // ----------------
                    if (pos <= -3000) {
                        // console.log('enabled BOXCARDS');
                        Vars.cardsBg = true;
                    }

                    // ---------------
                    // ENABLE BOX NUKE
                    // ---------------
                    if (pos >= 1950) {
                        // console.log('enabled BOXNUKE');
                        Vars.nukeBg = true;
                    }
                    // --------------------------------
                    // ################################

                    // -----
                    // STYLE
                    // -----
                    block.style.backgroundPositionX = pos + 'px';
                    // console.log('block', block);
                    // console.log('------------------');
                });

                // enabled messages background [move]
                Wapp.STG.MessageBg(e, direction);

                // enabled messages tips [move]
                Wapp.STG.MessageTips(e, direction);

                // enabled fruits background [move]
                Wapp.STG.FruitBg(e, direction);

                // enabled plataform background [move]
                Wapp.STG.PlataformBg(e, direction);

                // enabled nuke background [move]
                Wapp.STG.NukeBg(e, direction);

                // enabled cards background [move]
                Wapp.STG.CardsBg(e, direction);

            } else {
                // -------------------
                // reset speed percent
                // -------------------
                Vars.percentSpeed = 0;
                pSpeed = 0;

                // -----------------------
                // change values box speed
                // -----------------------
                if (Vars.boxSpeed) {
                    Vars.boxSpeed.style.width = pSpeed + '%';
                    Vars.boxSpeed.textContent = pSpeed + '%';
                    // Vars.boxSpeed.classList.remove('hue');
                }

                clearInterval(ani);
            }

        }, 40);
    };

    /* enabled message background */
    Wapp.STG.MessageBg = function (e, direction) {
        // console.log(':: MessageBg [fnc]');

        var
            compStyles = '',
            pos = '',
            newPos = '',
            boxRect = '',
            boxSize = '',
            winSize = '',
            marginColision = 40;

        if (Vars.msgBg === true) {
            // console.log('enable message bg');

            // show box message
            if (Vars.boxMsg) {
                // show message
                if (!Vars.boxMsg.classList.contains('active')) {
                    Vars.boxMsg.classList.add('active');

                    // show box message LEFT
                    if (direction === 'left') {
                        // Vars.boxMsg.style.left = '-300px';

                        // ############################
                        // ----------------------------
                        // CALC FOR SET POSITION in BOX
                        // edit this test logic!!!
                        // ----------------------------
                        // ############################
                        var boxRect2 = Vars.boxMsg.getBoundingClientRect();
                        // console.log('boxRect2.width', boxRect2.width);
                        // console.log('boxRect2.left', boxRect2.left);

                        // var winSize2 = parseFloat(win.innerWidth / 2);
                        // console.log('winSize2', winSize2);

                        // var boxSize2 = parseFloat((boxRect2.width / 2) + boxRect2.left);
                        // console.log('boxSize2', boxSize2);

                        var x = (boxRect2.left - (- win.innerWidth / 2));
                        // console.log('x', x);

                        var nX = (x + boxRect2.left);
                        // console.log('nX', nX);

                        // var nBox = doc.querySelectorAll('.boxGame .bgStore')[0].style.left = nX + 'px';
                        // console.log('nBox', nBox);

                        Vars.boxMsg.style.left = nX + 'px';
                        // ----------------------------
                        // ############################

                    // show box message RIGHT
                    // } else if (direction === 'right') {
                    //     Vars.boxMsg.style.left = '100%';
                    // }
                    }

                    /*
                    // animate mail
                    if (Vars.boxMsgMail) {
                        Vars.boxMsgMail.classList.add('active');
                    }

                    // show message text
                    // if (Vars.boxMsgText) {
                    //     Vars.boxMsgText.classList.add('active');
                    // }
                    */

                // animate move message
                } else {
                    compStyles = win.getComputedStyle(Vars.boxMsg);
                    // console.log('compStyles', compStyles);
                    // console.log('getPropertyValue', compStyles.getPropertyValue('left'));

                    // new positions parallax
                    // newPos = 0.5;
                    // ------------------------------------------------
                    // SYNC with LAST BG [last bg = first img position]
                    // bg terrain
                    // ------------------------------------------------
                    // newPos = parseFloat((Vars.bg.length - 1) * 0.5);
                    newPos = parseFloat((Vars.bg.length - 1) * Vars.mSpeed);
                    // ------------------------------------------------

                    // verify position
                    if (compStyles.getPropertyValue('left') === '') {
                        // console.log('not position, ZERO');
                        pos = 0;

                    } else {
                        // console.log('position, INCREMENT');
                        pos = parseFloat(compStyles.getPropertyValue('left').replace('px', ''));
                    }

                    if (direction === 'left') {
                        // console.log('move LEFT');
                        pos += newPos;

                    } else if (direction === 'right') {
                        // console.log('move RIGHT');
                        pos -= newPos;
                    }

                    Vars.boxMsg.style.left = pos + 'px';

                    // -------------------------------------------------------------
                    // verify position and SHOW store modal [CENTER BY WINDOW WIDTH]
                    // -------------------------------------------------------------
                    boxRect = Vars.boxMsg.getBoundingClientRect();
                    // console.log('boxRect.left', boxRect.left);

                    winSize = parseFloat(win.innerWidth / 2);
                    // console.log('winSize', winSize);

                    boxSize = parseFloat((boxRect.width / 2) + boxRect.left);
                    // console.log('boxSize', boxSize);

                    // -------------------------------
                    // :::::::::::::::::::::::::::::::
                    // DETECT COLISION [center ~STORE]
                    // :::::::::::::::::::::::::::::::
                    // -------------------------------
                    if ((boxSize <= (winSize + marginColision + 40)) && (boxSize >= (winSize - marginColision))) {
                        // console.log('>>>>>>>>>>>>>>>>> store CENTER');
                        Vars.boxMsg.classList.add('enter');

                    } else {
                        Vars.boxMsg.classList.remove('enter');
                    }
                    // ------------------------
                    // -------------------------------------------------------------
                }
            }

            // Vars.msgBg = false;
        }
    };

    /* enabled message tips */
    Wapp.STG.MessageTips = function (e, direction) {
        // console.log(':: MessageTips [fnc]');

        var
            compStyles = '',
            pos = '',
            newPos = '',
            boxRect = '',
            boxSize = '',
            winSize = '',
            marginColision = 40,
            stopLoop = false;

        // show box message
        if (Vars.boxMsgTips) {
            // show message
            if (!Vars.boxMsgTips.classList.contains('active')) {
                Vars.boxMsgTips.classList.add('active');

                /*
                // show box message LEFT
                if (direction === 'left') {
                    Vars.boxMsgTips.style.left = '-300px';

                // show box message RIGHT
                } else if (direction === 'right') {
                    Vars.boxMsgTips.style.left = '100%';
                }
                */
            }

            // animate move message
            // } else {
                compStyles = win.getComputedStyle(Vars.boxMsgTips);
                // console.log('compStyles', compStyles);
                // console.log('getPropertyValue', compStyles.getPropertyValue('left'));

                // new positions parallax
                // newPos = 0.5;
                // ------------------------------------------------
                // SYNC with LAST BG [last bg = first img position]
                // bg terrain
                // ------------------------------------------------
                // newPos = parseFloat((Vars.bg.length - 1) * 0.5);
                newPos = parseFloat((Vars.bg.length - 1) * Vars.mSpeed);
                // ------------------------------------------------

                // verify position
                if (compStyles.getPropertyValue('left') === '') {
                    // console.log('not position, ZERO');
                    pos = 0;

                } else {
                    // console.log('position, INCREMENT');
                    pos = parseFloat(compStyles.getPropertyValue('left').replace('px', ''));
                }

                if (direction === 'left') {
                    // console.log('move LEFT');
                    pos += newPos;

                } else if (direction === 'right') {
                    // console.log('move RIGHT');
                    pos -= newPos;
                }

                // Vars.boxMsg.style.left = pos + 'px';
                Vars.boxMsgTips.style.left = pos + 'px';

                // -------------------------------------------------------
                // verify position and SHOW texts [CENTER BY WINDOW WIDTH]
                // -------------------------------------------------------
                [].forEach.call(Vars.boxMsgTips.querySelectorAll('.tips'), function (el) {
                    // console.log('el', el);

                    if (stopLoop === false) {
                        boxRect = el.getBoundingClientRect();
                        // console.log('boxRect.left', boxRect.left);

                        winSize = parseFloat(win.innerWidth / 2);
                        // console.log('winSize', winSize);

                        boxSize = parseFloat((boxRect.width / 2) + boxRect.left);
                        // console.log('boxSize', boxSize);

                        // -------------------------------
                        // :::::::::::::::::::::::::::::::
                        // DETECT COLISION [center ~STORE]
                        // :::::::::::::::::::::::::::::::
                        // -------------------------------
                        if ((boxSize <= (winSize + marginColision + 40)) && (boxSize >= (winSize - marginColision))) {
                            // console.log('>>>>>>>>>>>>>>>>> infos CENTER');
                            // Vars.boxMsgTips.classList.add('show');
                            el.classList.add('show');

                            stopLoop = true;

                        } else {
                            // Vars.boxMsgTips.classList.remove('show');
                            el.classList.remove('show');
                        }
                        // ------------------------
                    }
                });
                // -------------------------------------------------------
            // }
        }

        // Vars.msgBg = false;
    };

    /* enabled box fruits background [move] */
    Wapp.STG.FruitBg = function (e, direction) {
        // console.log(':: FruitBg [fnc]');

        var
            compStyles = '',
            pos = '',
            newPos = '';
            // boxRect = '',
            // boxSize = '',
            // winSize = '',
            // marginColision = 40;

        if (Vars.fruitsBg === true) {
            // console.log('enable fruit bg');

            // show box fruit
            if (Vars.boxFruit) {
                // show message
                if (!Vars.boxFruit.classList.contains('active')) {
                    Vars.boxFruit.classList.add('active');

                    // show box message LEFT
                    // if (direction === 'left') {
                        // Vars.boxFruit.style.left = '-300px';

                    // show box message RIGHT
                    // } else if (direction === 'right') {
                    //     Vars.boxMsg.style.left = '100%';
                    // }

                    if (direction === 'right') {
                        // Vars.boxFruit.style.left = win.innerWidth + 'px';

                        var boxRect2 = Vars.boxFruit.getBoundingClientRect();

                        if (boxRect2.left === 0) {
                            // ############################
                            // ----------------------------
                            // CALC FOR SET POSITION in BOX
                            // edit this test logic!!!
                            // ----------------------------
                            // ############################
                            // var boxRect2 = Vars.boxFruit.getBoundingClientRect();
                            // console.log('boxRect2.width', boxRect2.width);
                            // console.log('boxRect2.left', boxRect2.left);

                            // var winSize2 = parseFloat(win.innerWidth / 2);
                            // console.log('winSize2', winSize2);

                            // var boxSize2 = parseFloat((boxRect2.width / 2) + boxRect2.left);
                            // console.log('boxSize2', boxSize2);

                            var x = (boxRect2.left - (- win.innerWidth / 2));
                            // console.log('x', x);

                            var nX = (x + (boxRect2.width / 4));
                            // console.log('nX', nX);

                            // var nBox = doc.querySelectorAll('.boxGame .bgStore')[0].style.left = nX + 'px';
                            // console.log('nBox', nBox);

                            Vars.boxFruit.style.left = nX + 'px';
                            // ----------------------------
                            // ############################
                        }
                    }

                    /*
                    // animate mail
                    if (Vars.boxMsgMail) {
                        Vars.boxMsgMail.classList.add('active');
                    }

                    // show message text
                    // if (Vars.boxMsgText) {
                    //     Vars.boxMsgText.classList.add('active');
                    // }
                    */

                // animate move message
                } else {
                    compStyles = win.getComputedStyle(Vars.boxFruit);
                    // console.log('compStyles', compStyles);
                    // console.log('getPropertyValue', compStyles.getPropertyValue('left'));

                    // new positions parallax
                    // newPos = 0.5;
                    // ------------------------------------------------
                    // SYNC with LAST BG [last bg = first img position]
                    // bg terrain
                    // ------------------------------------------------
                    // newPos = parseFloat((Vars.bg.length - 1) * 0.5);
                    newPos = parseFloat((Vars.bg.length - 1) * Vars.mSpeed);
                    // ------------------------------------------------

                    // verify position
                    if (compStyles.getPropertyValue('left') === '') {
                        // console.log('not position, ZERO');
                        pos = 0;

                    } else {
                        // console.log('position, INCREMENT');
                        pos = parseFloat(compStyles.getPropertyValue('left').replace('px', ''));
                    }

                    if (direction === 'left') {
                        // console.log('move LEFT');
                        pos += newPos;

                    } else if (direction === 'right') {
                        // console.log('move RIGHT');
                        pos -= newPos;
                    }

                    Vars.boxFruit.style.left = pos + 'px';

                    // -------------------------------------------------------------
                    // verify position and SHOW store modal [CENTER BY WINDOW WIDTH]
                    // -------------------------------------------------------------
                    /*
                    boxRect = Vars.boxMsg.getBoundingClientRect();
                    // console.log('boxRect.left', boxRect.left);

                    winSize = parseFloat(win.innerWidth / 2);
                    // console.log('winSize', winSize);

                    boxSize = parseFloat((boxRect.width / 2) + boxRect.left);
                    // console.log('boxSize', boxSize);

                    // -------------------------------
                    // :::::::::::::::::::::::::::::::
                    // DETECT COLISION [center ~STORE]
                    // :::::::::::::::::::::::::::::::
                    // -------------------------------
                    if ((boxSize <= (winSize + marginColision + 40)) && (boxSize >= (winSize - marginColision))) {
                        // console.log('>>>>>>>>>>>>>>>>> store CENTER');
                        Vars.boxMsg.classList.add('enter');

                    } else {
                        Vars.boxMsg.classList.remove('enter');
                    }
                    // ------------------------
                    */
                    // -------------------------------------------------------------
                }
            }

            // Vars.msgBg = false;

        // hide box fruit
        } else {
            if (Vars.boxFruit) {
                Vars.boxFruit.classList.remove('active');
            }
        }
    };


    /* enabled box plataform background [move] */
    Wapp.STG.PlataformBg = function (e, direction) {
        // console.log(':: PlataformBg [fnc]');

        var
            compStyles = '',
            pos = '',
            newPos = '';
            // boxRect = '',
            // boxSize = '',
            // winSize = '',
            // marginColision = 40;

        if (Vars.plataformBg === true) {
            // console.log('enable fruit bg');

            // show box fruit
            if (Vars.boxPlataform) {
                // show message
                if (!Vars.boxPlataform.classList.contains('active')) {
                    Vars.boxPlataform.classList.add('active');

                    if (direction === 'right') {
                        // Vars.boxFruit.style.left = win.innerWidth + 'px';

                        var boxRect2 = Vars.boxPlataform.getBoundingClientRect();

                        if (boxRect2.left === 0) {
                            // ############################
                            // ----------------------------
                            // CALC FOR SET POSITION in BOX
                            // edit this test logic!!!
                            // ----------------------------
                            // ############################
                            // var boxRect2 = Vars.boxFruit.getBoundingClientRect();
                            // console.log('boxRect2.width', boxRect2.width);
                            // console.log('boxRect2.left', boxRect2.left);

                            // var winSize2 = parseFloat(win.innerWidth / 2);
                            // console.log('winSize2', winSize2);

                            // var boxSize2 = parseFloat((boxRect2.width / 2) + boxRect2.left);
                            // console.log('boxSize2', boxSize2);

                            var x = (boxRect2.left - (- win.innerWidth / 2));
                            // console.log('x', x);

                            var nX = (x + (boxRect2.width / 4));
                            // console.log('nX', nX);

                            // var nBox = doc.querySelectorAll('.boxGame .bgStore')[0].style.left = nX + 'px';
                            // console.log('nBox', nBox);

                            Vars.boxPlataform.style.left = nX + 'px';
                            // ----------------------------
                            // ############################
                        }
                    }

                    /*
                    // animate mail
                    if (Vars.boxMsgMail) {
                        Vars.boxMsgMail.classList.add('active');
                    }

                    // show message text
                    // if (Vars.boxMsgText) {
                    //     Vars.boxMsgText.classList.add('active');
                    // }
                    */

                // animate move message
                } else {
                    compStyles = win.getComputedStyle(Vars.boxPlataform);
                    // console.log('compStyles', compStyles);
                    // console.log('getPropertyValue', compStyles.getPropertyValue('left'));

                    // new positions parallax
                    // newPos = 0.5;
                    // ------------------------------------------------
                    // SYNC with LAST BG [last bg = first img position]
                    // bg terrain
                    // ------------------------------------------------
                    // newPos = parseFloat((Vars.bg.length - 1) * 0.5);
                    newPos = parseFloat((Vars.bg.length - 1) * Vars.mSpeed);
                    // ------------------------------------------------

                    // verify position
                    if (compStyles.getPropertyValue('left') === '') {
                        // console.log('not position, ZERO');
                        pos = 0;

                    } else {
                        // console.log('position, INCREMENT');
                        pos = parseFloat(compStyles.getPropertyValue('left').replace('px', ''));
                    }

                    if (direction === 'left') {
                        // console.log('move LEFT');
                        pos += newPos;

                    } else if (direction === 'right') {
                        // console.log('move RIGHT');
                        pos -= newPos;
                    }

                    Vars.boxPlataform.style.left = pos + 'px';
                }
            }

            // Vars.msgBg = false;

        // hide box fruit
        } else {
            if (Vars.boxFruit) {
                Vars.boxFruit.classList.remove('active');
            }
        }
    };

    /* enabled box nuke background [move] */
    Wapp.STG.NukeBg = function (e, direction) {
        // console.log(':: NukeBg [fnc]');

        var
            compStyles = '',
            pos = '',
            newPos = '';
            // boxRect = '',
            // boxSize = '',
            // winSize = '',
            // marginColision = 40;

        if (Vars.nukeBg === true) {
            // console.log('nuke = true > enable nuke bg');

            if (Vars.boxNuke) {
                // --------
                // show box
                // --------
                if (!Vars.boxNuke.classList.contains('active')) {
                    Vars.boxNuke.classList.add('active');

                    // console.log('nuke add class active');

                    if (direction === 'left') {
                        // Vars.boxNuke.style.left = -(win.innerWidth + 'px');
                        // console.log('nuke add style left');

                        // ############################
                        // ----------------------------
                        // CALC FOR SET POSITION in BOX
                        // edit this test logic!!!
                        // ----------------------------
                        // ############################
                        var boxRect2 = Vars.boxNuke.getBoundingClientRect();
                        // console.log('boxRect2.width', boxRect2.width);
                        // console.log('boxRect2.left', boxRect2.left);

                        // var winSize2 = parseFloat(win.innerWidth / 2);
                        // console.log('winSize2', winSize2);

                        // var boxSize2 = parseFloat((boxRect2.width / 2) + boxRect2.left);
                        // console.log('boxSize2', boxSize2);

                        var x = (boxRect2.left - (- win.innerWidth / 2));
                        // console.log('x', x);

                        var nX = (x + boxRect2.left);
                        // console.log('nX', nX);

                        // var nBox = doc.querySelectorAll('.boxGame .bgStore')[0].style.left = nX + 'px';
                        // console.log('nBox', nBox);

                        Vars.boxNuke.style.left = nX + 'px';
                        // ----------------------------
                        // ############################
                    }

                // ------------
                // animate move
                // ------------
                } else {
                    compStyles = win.getComputedStyle(Vars.boxNuke);
                    // console.log('compStyles', compStyles);
                    // console.log('getPropertyValue', compStyles.getPropertyValue('left'));

                    // new positions parallax
                    // newPos = 0.5;
                    // ------------------------------------------------
                    // SYNC with LAST BG [last bg = first img position]
                    // bg terrain
                    // ------------------------------------------------
                    // newPos = parseFloat((Vars.bg.length - 1) * 0.5);
                    newPos = parseFloat((Vars.bg.length - 1) * Vars.mSpeed);
                    // ------------------------------------------------

                    // verify position
                    if (compStyles.getPropertyValue('left') === '') {
                        // console.log('not position, ZERO');
                        pos = 0;

                    } else {
                        // console.log('position, INCREMENT');
                        pos = parseFloat(compStyles.getPropertyValue('left').replace('px', ''));
                    }

                    if (direction === 'left') {
                        // console.log('move LEFT');
                        pos += newPos;

                    } else if (direction === 'right') {
                        // console.log('move RIGHT');
                        pos -= newPos;
                    }

                    // console.log('pos', pos);
                    Vars.boxNuke.style.left = pos + 'px';
                }
            }
        }
    };

    /* enabled box cards background [move] */
    Wapp.STG.CardsBg = function (e, direction) {
        // console.log(':: CardsBg [fnc]');

        var
            compStyles = '',
            pos = '',
            newPos = '';
            // boxRect = '',
            // boxSize = '',
            // winSize = '',
            // marginColision = 40;

        if (Vars.cardsBg === true) {
            if (Vars.boxCards) {
                // --------
                // show box
                // --------
                if (!Vars.boxCards.classList.contains('active')) {
                    Vars.boxCards.classList.add('active');

                    // console.log('nuke add class active');

                    // if (direction === 'left') {
                    //     Vars.boxCards.style.left = -(win.innerWidth + 'px');
                    //     // console.log('nuke add style left');
                    // }

                    if (direction === 'right') {
                        // Vars.boxCards.style.left = win.innerWidth + 'px';

                        // ############################
                        // ----------------------------
                        // CALC FOR SET POSITION in BOX
                        // edit this test logic!!!
                        // ----------------------------
                        // ############################
                        var boxRect2 = Vars.boxCards.getBoundingClientRect();
                        // console.log('boxRect2.width', boxRect2.width);
                        // console.log('boxRect2.left', boxRect2.left);

                        // var winSize2 = parseFloat(win.innerWidth / 2);
                        // console.log('winSize2', winSize2);

                        // var boxSize2 = parseFloat((boxRect2.width / 2) + boxRect2.left);
                        // console.log('boxSize2', boxSize2);

                        var x = (boxRect2.left - (- win.innerWidth / 2));
                        // console.log('x', x);

                        var nX = (x + (boxRect2.width / 2.5));
                        // console.log('nX', nX);

                        // var nBox = doc.querySelectorAll('.boxGame .bgStore')[0].style.left = nX + 'px';
                        // console.log('nBox', nBox);

                        Vars.boxCards.style.left = nX + 'px';
                        // ----------------------------
                        // ############################
                    }

                // ------------
                // animate move
                // ------------
                } else {
                    compStyles = win.getComputedStyle(Vars.boxCards);
                    // console.log('compStyles', compStyles);
                    // console.log('getPropertyValue', compStyles.getPropertyValue('left'));

                    // new positions parallax
                    // newPos = 0.5;
                    // ------------------------------------------------
                    // SYNC with LAST BG [last bg = first img position]
                    // bg terrain
                    // ------------------------------------------------
                    // newPos = parseFloat((Vars.bg.length - 1) * 0.5);
                    newPos = parseFloat((Vars.bg.length - 1) * Vars.mSpeed);
                    // ------------------------------------------------

                    // verify position
                    if (compStyles.getPropertyValue('left') === '') {
                        // console.log('not position, ZERO');
                        pos = 0;

                    } else {
                        // console.log('position, INCREMENT');
                        pos = parseFloat(compStyles.getPropertyValue('left').replace('px', ''));
                    }

                    if (direction === 'left') {
                        // console.log('move LEFT');
                        pos += newPos;

                    } else if (direction === 'right') {
                        // console.log('move RIGHT');
                        pos -= newPos;
                    }

                    // console.log('pos', pos);
                    Vars.boxCards.style.left = pos + 'px';
                }
            }
        }
    };

    /* verify kCode */
    Wapp.STG.VerifyCode = function (e, key) {
        // console.log(':: VerifyCode [fnc]');

        // console.log('Vars.kCode', Vars.kCode);
        // console.log('Vars.kAmount', Vars.kAmount);
        // console.log('Vars.kCode[Vars.kAmount]', Vars.kCode[Vars.kAmount]);

        if (Vars.kCode[Vars.kAmount] === key) {
            Vars.kAmount ++;

            if (Vars.kAmount === 8) {
                // console.log('KONAMI CODE OK!');

                // konami code
                Vars.code = true;

                var
                    box = doc.querySelectorAll('.section.content')[0];

                if (box) {
                    // add new background
                    box.classList.add('nBg');
                }
            }

        } else {
            Vars.kAmount = 0;
        }
    };

    /* preloaders */
    Wapp.STG.Preloaders = function (e) {
        // console.log(':: Preloaders [fnc]');

        var
            audio = [];

        // ---------------
        // PRELOADER AUDIO
        // ---------------
        [].forEach.call(Vars.audioFiles, function (file, index) {
            // console.log('file', file);

            audio[index] = new Audio();
            audio[index].addEventListener('canplaythrough', Wapp.STG.SoundsLoaded, true);
            audio[index].src = file;
        });

        // console.log('audio', audio);
        // ---------------

        // ---------------
        // PRELOADER IMAGE
        // ---------------
        // here code for load images...
        // ...
        // ---------------
    };

    /* sounds loaded */
    Wapp.STG.SoundsLoaded = function (e) {
        // console.log(':: SoundsLoaded [fnc]');

        Vars.audioAmount ++;

        if (Vars.audioFiles.length === Vars.audioAmount) {
            console.log('all sounds loaded!');
            console.log('INIT GAME!');
        }
    };

    /* sounds effects */
    Wapp.STG.Sounds = function (e, file) {
        // console.log(':: Sounds [fnc]');

        // console.log('e', e);
        // console.log('file', file);

        if (Vars.audio) {
            // SET FILE
            Vars.audio.src = file;

            // --------------------------
            // not play audio FIRST EVENT
            // --------------------------
            /*
            if (Vars.firstEvent === true) {
                // console.log('FIRSTEVENT not play audio');
                Vars.firstEvent = false;

                Vars.audio.autoplay = false;
                Vars.audio.muted = false;

                // LOAD
                Vars.audio.load();

                // enabled sounds [play]
                setTimeout(function () {
                    // Vars.audio.load();
                    // Vars.audio.play();

                    Wapp.STG.Sounds(e, file);
                }, 1000, e, file);

                return false;
            }
            */

            // LOAD
            Vars.audio.load();
            Vars.audio.addEventListener('loadeddata', Wapp.STG.SoundsPlay, true);
        }
    };

    /* sounds play */
    Wapp.STG.SoundsPlay = function (e) {
        // console.log(':: SoundsPlay [fnc]');

        if (Vars.audio) {
            // PLAY
            Vars.audio.play();

            // PAUSE
            // Vars.audio.pause();
        }
    };

    /* add ICON fruit in text INFOS */
    Wapp.STG.IconsInfo = function () {
        // console.log(':: IconsInfo [fnc]');

        [].forEach.call(Vars.boxIconsTexts, function (el) {
            el.insertAdjacentHTML('afterbegin', '<i class="sprFruits01 ' + Vars.fruitsItems[Wapp.STG.RandomFruit().random] + '"></i>');
        });
    };

    /* show hide boxes */
    Wapp.STG.ShowHide = function (e) {
        // console.log(':: ShowHide [fnc]');

        // element
        if (e.target) {
            if (e.target.dataset.els) {
                [].forEach.call(doc.querySelectorAll(e.target.dataset.els), function (box) {
                    // show / hide
                    if (box) {
                        // hide
                        if (box.classList.contains('active')) {
                            box.classList.remove('active');

                        // show
                        } else {
                            box.classList.add('active');
                        }
                    }
                });
            }
        }

        e.preventDefault();
        return false;
    };

    /* clicker effect */
    Wapp.STG.Clicker = function (e) {
        // console.log(':: Clicker [fnc]');

        var
            box = doc.querySelectorAll('.bgClicker')[0],
            clk = '';

        // console.log('e.clientY', e.clientY);
        // console.log('e.clientX', e.clientX);
        // console.log('------');

        if (box) {
            clk = doc.createElement('I');
            clk.classList.add('sprClick');
            clk.style.top = e.clientY + 'px';
            clk.style.left = e.clientX + 'px';

            box.appendChild(clk);

            setTimeout(function () {
                clk.remove();
            }, 700);
        }

        // e.preventDefault();
        // return false;
    };

    /* REMOVE only for debugs */
    /* change background */
    Wapp.STG.ChangeBg = function (e) {
        // console.log(':: ChangeBg [fnc]');

        var
            key = '',
            html = '',
            x = 0,
            loop = true,
            images = [],
            newPos = 0,
            stlBgPos = '';

        // SET POSITION OBJECTS [player, messages, fruits by TERRAIN]
        // console.log('>> set position objects [player, messages, fruits by TERRAIN]');

        // console.log('OBJ BG', Vars.backgrounds);

        for (key in Vars.backgrounds) {
            // console.log('key', key);
            // console.log('values', Vars.backgrounds[key]);

            if (x === Vars.bgSelected) {
                // console.log('x', x);
                // console.log('Vars.bgSelected', Vars.bgSelected);
                // console.log('key >>> ', key);

                // -------------
                // create blocks
                // -------------
                [].forEach.call(Vars.backgrounds[key], function (box, index) {
                    // ---------------------------------
                    // store image [for get PIXEL color]
                    // ---------------------------------
                    // for TOP
                    if (index === 0) {
                        images[0] = 'thegame/img/backgrounds' + '/' + key + '/' + box;
                    }

                    // for BOTTOM
                    if (index === (Vars.backgrounds[key].length - 1)) {
                        images[1] = 'thegame/img/backgrounds' + '/' + key + '/' + box;
                    }
                    // ---------------------------------

                    // ----------------------------
                    // INCREMENT POSITION BY GLOBAL
                    // ----------------------------
                    // ----------------------
                    // NEW POSITIONS PARALLAX
                    // ----------------------
                    if (index === 0) {
                        newPos = Vars.mSpeed;

                    } else {
                        newPos = parseFloat(index * Vars.mSpeed);
                    }

                    // -----
                    // STYLE
                    // -----
                    // block.style.backgroundPositionX = pos + 'px';
                    stlBgPos = parseFloat(Vars.bgPos + newPos) + 'px';
                    // ----------------------------

                    html += '<div class="bg" style="background-image: url(thegame/img/backgrounds' + '/' + key + '/' + box + '); background-position-x:' + stlBgPos + ';"></div>';
                });
                // -------------

                // ---------------------------------------------------------
                // change position PLAYER | WALKEFFECT | BOXMSGTIPS | BOXFRUIT by terrain
                // ---------------------------------------------------------
                // console.log('Vars.posTerrain', Vars.posTerrain);
                // console.log('Vars.bgSelected', Vars.bgSelected);
                // console.log('Vars.posTerrain[Vars.bgSelected]', Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]]);
                // console.log('Object.keys(Vars.backgrounds)', Object.keys(Vars.posTerrain)[Vars.bgSelected]);

                Vars.player.style.bottom = Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]];
                Vars.boxMsgTips.style.bottom = Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]];
                Vars.boxFruit.style.bottom = Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]];

                // [].forEach.call(doc.querySelectorAll('.walkEffect'), function (block, index) {
                //     block.bottom = Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]];
                // });

                // console.log('Vars.posTerrain', Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]]);
                // ---------------------------------------------------------

                if (doc.querySelectorAll('.bgs')[0]) {
                    doc.querySelectorAll('.bgs')[0].innerHTML = html;

                    // console.log('images', images);
                    // console.log('for TOP', images[0]);
                    // console.log('for BOTTOM', images[1]);

                    // ----------------------------------------
                    // GET COLORS FOR TOP AND BOTTOM BACKGROUND
                    // ----------------------------------------
                    Wapp.STG.GetColors('top', images[0], 0, 0);
                    Wapp.STG.GetColors('bottom', images[1], 0, 0);
                    // ----------------------------------------
                }

                // edit global BG
                // Vars.bg = doc.querySelectorAll('.game .bg');
                // console.log('Vars.bg', Vars.bg);
            }

            x++;
        };

        /// ----------------------------

        /*
        for (key in Vars.backgrounds) {
            html = '';

            console.log('key', key);
            console.log('values', Vars.backgrounds[key]);
            console.log('length', Vars.backgrounds[key].length);
            console.log('---');

            // create blocks
            [].forEach.call(Vars.backgrounds[key], function (box, index) {

                // set backgrounds blur
                // if ((index - 1) === Object.keys(Vars.backgrounds).length - 1) {

                    // console.log('index', index);
                    // console.log('Vars.backgrounds[key].length - 1', Vars.backgrounds[key].length - 1);

                // console.log('box', box);
                // console.log('index', index);

                // ---------------------------------
                // store image [for get PIXEL color]
                // ---------------------------------
                // for TOP
                if (index === 0) {
                    images[0] = 'thegame/img/backgrounds' + '/' + key + '/' + box;
                }

                // for BOTTOM
                if (index === (Vars.backgrounds[key].length - 1)) {
                    images[1] = 'thegame/img/backgrounds' + '/' + key + '/' + box;
                }
                // ---------------------------------

                if (index === (Vars.backgrounds[key].length - 2)) {
                    html += '<div class="bg blur" style="background-image: url(thegame/img/backgrounds' + '/' + key + '/' + box + ');"></div>';

                } else {
                    html += '<div class="bg" style="background-image: url(thegame/img/backgrounds' + '/' + key + '/' + box + ');"></div>';
                }

                // set FIRST background BLUR
                // if (index === 4) {
                //     if (doc.querySelectorAll('.section.content')[0]) {
                //         doc.querySelectorAll('.section.content')[0].style.backgroundImage = 'url(thegame/img/backgrounds' + '/' + key + '/' + box;
                //     }
                // }
            });

            // console.log('---');
            // console.log('html', html);

            console.log('Vars.bgSelected', Vars.bgSelected);

            // print first background [DEBUG]
            if (loop === true) {
                if (x === Vars.bgSelected) {
                    loop = false;

                    // ----------------------------------
                    // CHANGE POSITION PLAYER for TERRAIN
                    // ----------------------------------
                    // console.log('Vars.posTerrain', Vars.posTerrain);
                    // console.log('Vars.bgSelected', Vars.bgSelected);
                    // console.log('Vars.posTerrain[Vars.bgSelected]', Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]]);
                    // console.log('Object.keys(Vars.backgrounds)', Object.keys(Vars.posTerrain)[Vars.bgSelected]);

                    Vars.player.style.bottom = Vars.posTerrain[Object.keys(Vars.posTerrain)[Vars.bgSelected]];
                    // ----------------------------------

                    if (doc.querySelectorAll('.bgs')[0]) {
                        doc.querySelectorAll('.bgs')[0].innerHTML = html;

                        // console.log('images', images);
                        // console.log('for TOP', images[0]);
                        // console.log('for BOTTOM', images[1]);

                        // ----------------------------------------
                        // GET COLORS FOR TOP AND BOTTOM BACKGROUND
                        // ----------------------------------------
                        Wapp.STG.GetColors('top', images[0], 0, 0);
                        Wapp.STG.GetColors('bottom', images[1], 0, 0);
                        // ----------------------------------------

                        Vars.bgSelected++;
                        // x = 0;
                    }

                    // -----------------
                    // reset backgrounds
                    // -----------------
                    if (x >= (Object.keys(Vars.backgrounds).length - 1)) {
                        x = 0;
                        Vars.bgSelected = 0;
                    }
                }
            }

            x++;
        }
        */

        // set global bg
        Vars.bg = doc.querySelectorAll('.game .bg');

        e.preventDefault();
        return false;
    };

    /* matrix background */
    Wapp.STG.MatrixBg = function (e) {
        // console.log(':: MatrixBg [fnc]');

        // geting canvas by Boujjou Achraf
        // var c = document.getElementById("c");
        var c = doc.querySelectorAll('.matrixBg')[0];
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        //chinese characters - taken from the unicode charset
        // var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#009966";//green text
            // ctx.font = font_size + "px arial";
            ctx.font = font_size + "px Matrix Code NFI";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }

        setInterval(draw, 35);
    };

    /* get color backgrounds */
    Wapp.STG.GetColors = function (el, url, x, y) {
        var
            img = new Image(),
            canvas = doc.createElement('canvas'),
            context = canvas.getContext('2d'),
            color = '',
            elColorTop = doc.querySelectorAll('.section.content .bgColorTop')[0],
            elColorBottom = doc.querySelectorAll('.section.content .bgColorBottom')[0];

        img.src = url;

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;

            context.drawImage(img, 0, 0);

            // console.log('info', context.getImageData(x, y, 1, 1).data);

            // ---------------------
            // for background TOP
            // ---------------------
            if (el === 'top') {
                color = context.getImageData(x, y, 1, 1).data;
                // console.log('TOP rgb', color[0] + ', ' + color[1] + ', ' + color[2] + ', ' + color[3]);

                if (elColorTop) {
                    elColorTop.style.background = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
                }

            // ---------------------
            // for background BOTTOM
            // ---------------------
            } else if (el === 'bottom') {
                color = context.getImageData(x, img.height - 1, 1, 1).data;
                // console.log('BOTTOM rgb', color[0] + ', ' + color[1] + ', ' + color[2] + ', ' + color[3]);

                if (elColorBottom) {
                    elColorBottom.style.background = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
                }
            }
        };
    };

    /* change player [skins] */
    // Wapp.STG.ChangeStyles = function (e) {
    Wapp.STG.ChangePlayer = function (e) {
        // console.log(':: ChangePlayer [fnc]');

        // SET NAME PLAYER
        console.log('>> set player name');
        // SET COVER PLAYER
        console.log('>> set player cover');

        // ---------------------------
        // change skins
        // ---------------------------
        // Vars.skinsSelected ++;

        if (!Vars.skins[Vars.skinsSelected]) {
            Vars.skinsSelected = 0;
        }

        // set player skin
        Vars.player.className = Vars.skins[Vars.skinsSelected] + ' player';

        // ---------------------------
        // change names
        // ---------------------------
        // set player name
        // if (Vars.status.querySelectorAll('.name')[0]) {
        //     Vars.status.querySelectorAll('.name')[0].textContent = Vars.names[Vars.skinsSelected];
        // }

        // ---------------------------
        // change thumbs
        // ---------------------------
        // set player thumb
        // if (Vars.status.querySelectorAll('.thumb i')[0]) {
        //     Vars.status.querySelectorAll('.thumb i')[0].className = Vars.skins[Vars.skinsSelected].split(' ')[1] + ' picture';
        // }

        e.preventDefault();
        return false;
    };

    /* nuke click uranium */
    Wapp.STG.NukeClick = function (e) {
        // console.log(':: NukeClick [fnc]');

        var
            boxText = doc.createElement('I'),
            randDeg = Math.floor(Math.random() * 361),
            w = doc.querySelectorAll('.nukeBar span')[0].style.width.replace('px', '');

        // console.log('w', w);
        // console.log('w parse', parseFloat(w));
        // console.log('w+1', w + 1);
        // console.log('w parse +1', parseFloat(w) + 1);
        // console.log('randDeg', randDeg);

        if (parseFloat(w) < 155) {
            // animate uranium
            e.target.querySelectorAll('img')[0].style.filter = 'hue-rotate(' + randDeg + 'deg)';
            doc.querySelectorAll('.nukeLiquid')[0].style.filter = 'hue-rotate(' + randDeg + 'deg)';

            doc.querySelectorAll('.nukeBar span')[0].style.width = (parseFloat(w) + 1) + 'px';
            doc.querySelectorAll('.nukeBar span')[0].style.filter = 'hue-rotate(' + randDeg + 'deg)';

            // add text
            boxText.textContent = '+1';

            // random position left
            boxText.style.left = Math.floor(Math.random() * 101) + 'px';

            // append
            e.target.appendChild(boxText);

            // animate
            setTimeout(function () {
                boxText.classList.add('active');

                // remove
                setTimeout(function () {
                    boxText.remove();
                }, 1100);
            }, 350);

        } else {
            console.log('CREATED NUKED!');
        }

        e.preventDefault();
        return false;
    };

    /* loader */
    Wapp.STG.Loader = function (e) {
        // console.log(':: Loader [fnc]');

        // change text loader
        // check device
        // remove loader

        var
            text = 'your device is:';

        // show device
        if (Vars.deviceClient === 'mobile') {
            if (doc.querySelectorAll('.dMobile')[0]) {
                doc.querySelectorAll('.dMobile')[0].classList.add('block', 'show');
            }

        } else if (Vars.deviceClient === 'desktop') {
            if (doc.querySelectorAll('.dDesktop')[0]) {
                doc.querySelectorAll('.dDesktop')[0].classList.add('block', 'show');
            }
        }

        // change text
        if (doc.querySelectorAll('.loader p .text')[0]) {
            // doc.querySelectorAll('.loader p .text')[0].textContent = 'O seu dispositivo é:';
            doc.querySelectorAll('.loader p .text')[0].innerHTML += '<b>' + text + '</b>';
        }

        if (doc.querySelectorAll('.loader')[0]) {
            setTimeout(function () {
                doc.querySelectorAll('.loader')[0].classList.add('opacity');
                setTimeout(function () {
                    doc.querySelectorAll('.loader')[0].remove();
                }, 1000);
            }, 1500);
        }
    };

    /* create player select GUI [for STORE] */
    Wapp.STG.CreatePlayerSelect = function (e) {
        // console.log(':: CreatePlayerSelect [fnc]');

        var
            html = '',
            // randomColor = '';
            amount = Object.keys(Vars.skins).length;

        // console.log('amount pl', amount);


        // console.log('boxPlayerSlc', Vars.boxPlayerSlc);
        // console.log('skins', Vars.skins);

        [].forEach.call(Vars.skins, function (el, index) {
            // console.log('el', el);

            // -------------
            // random colors
            // -------------
            // randomColor = Math.floor(Math.random() * 16777215).toString(16);
            // -------------

            html += '<!-- slide -->';
            html += '<div class="item">';
                html += '<div class="box">';
                    // html += '<a href="#" title="' + el + '" style="background:#' + randomColor + ';">';
                    // html += '<a href="#" class="get" title="' + el + '" data-info="' + el + '">';
                    // html += '<a class="get" title="' + el + '" data-info="' + el + '" data-item="player">';
                    html += '<a>';
                        // html += '<span class="material-icons-outlined btnPlayerDetails">';
                        //     html += 'live_help';
                        // html += '</span>';
                        html += '<i class="btnPlayerDetails fa-solid fa-circle-info"></i>';
                        html += '<i class="' + el + '">';
                        html += '</i>';
                        html += '<p>';
                            html += '<strong>';
                                html += Vars.names[index].split(' ')[0];
                            html += '</strong>';
                            html += '<em>';
                                html += Vars.names[index].split(' ')[1];
                            html += '</em>';
                        html += '</p>';
                    html += '</a>';
                    html += '<div class="boxAccurate afterClear">';
                        html += '<ul>';
                            html += '<li>';
                                // html += '<span class="material-icons-outlined">';
                                //     html += 'star_outline';
                                // html += '</span>';
                                html += '<i class="fa-solid fa-star"></i>';
                                html += '<p>';
                                    html += '<strong>';
                                        html += 'rarity';
                                    html += '</strong>';
                                    html += '<span class="bar">';
                                        html += '<!-- dynamic percent -->';
                                        html += '<em style="width:65%;"></em>';
                                    html += '</span>';
                                html += '</p>';
                            html += '</li>';
                            html += '<li>';
                                // html += '<span class="material-icons-outlined">';
                                //     html += 'multiple_stop';
                                // html += '</span>';
                                html += '<i class="fa-solid fa-right-left"></i>';
                                html += '<p>';
                                    html += '<strong>';
                                        html += 'size';
                                    html += '</strong>';
                                    html += '<span class="bar">';
                                        html += '<!-- dynamic percent -->';
                                        html += '<em style="width:80%;"></em>';
                                    html += '</span>';
                                html += '</p>';
                            html += '</li>';
                            html += '<li>';
                                // html += '<span class="material-icons-outlined">';
                                //     html += 'double_arrow';
                                // html += '</span>';
                                html += '<i class="fa-solid fa-bolt-lightning"></i>';
                                html += '<p>';
                                    html += '<strong>';
                                        html += 'speed';
                                    html += '</strong>';
                                    html += '<span class="bar">';
                                        html += '<!-- dynamic percent -->';
                                        html += '<em style="width:35%;"></em>';
                                    html += '</span>';
                                html += '</p>';
                            html += '</li>';
                        html += '</ul>';
                    html += '</div>';
                html += '</div>';
                // html += '<a href="#" title="Buy" class="btnBuy" data-info="' + el + '" data-value="' + el + '">';
                // html += '<a href="#" title="Buy" class="btnBuy" data-info="' + el + '" data-value="50">';
                html += '<a href="#" title="Buy" class="btnBuy" data-info="' + el + '" data-item="player" data-index="' + index + '">';
                    html += '<i class="sprTreasure sprFruits"></i>';
                    html += '<em>';
                        // html += '9999';
                        html += 'FREE';
                    html += '</em>';
                html += '</a>';
            html += '</div>';
        });

        // append
        if (Vars.boxPlayerSlc) {
            Vars.boxPlayerSlc.innerHTML = html;

            // box size
            Vars.boxPlayerSlc.style.width = parseFloat(amount * 200) + 'px';
        }

        // ----------------
        // EVENTS
        // ----------------

        // details
        [].forEach.call(doc.querySelectorAll('.btnPlayerDetails'), function (el) {
            // console.log('el', el);
            el.addEventListener(Vars.deviceEvents[Vars.deviceClient]['click'], Wapp.STG.PlayerDetails, true);
        });

        // buy
        // [].forEach.call(doc.querySelectorAll('.btnBuy'), function (el) {
        //     // console.log('el', el);
        //     el.addEventListener(Vars.deviceEvents[Vars.deviceClient]['click'], Wapp.STG.BuyItems, true);
        // });
    };

    /* show | hide player details */
    Wapp.STG.PlayerDetails = function (e) {
        // console.log(':: PlayerDetails [fnc]');

        // console.log('e', e);
        // console.log('e.target', e.target);
        // console.log('parent 1', e.target.parentElement);
        // console.log('parent 2', e.target.parentElement.parentElement);

        var
            box = '';

        if (e.target.parentElement) {
            box = e.target.parentElement;

            if (box.parentElement) {
                box = box.parentElement;

                // if (box.querySelectorAll('.boxAccurate')[0]) {
                    // box = box.querySelectorAll('.boxAccurate')[0];

                    if (box.classList.contains('active')) {
                        box.classList.remove('active');

                    } else {
                        box.classList.add('active');
                    }
                // }
            }
        }

        e.preventDefault();
        return false;
    };

    /* buy items store */
    Wapp.STG.BuyItems = function (e) {
        // console.log(':: BuyItems [fnc]');

        // console.log('dataset.info', e.target.dataset.info);
        // console.log('dataset.item', e.target.dataset.item);
        // console.log('dataset.index', e.target.dataset.index);

        if ((e.target.dataset.item) && (e.target.dataset.info) && (e.target.dataset.index)) {
            // -------------------
            // SET PLAYER selected
            // -------------------
            if (e.target.dataset.item === 'player') {
                // console.log('change player');

                // set player selected
                Vars.skinsSelected = parseFloat(e.target.dataset.index);
                // console.log('skinsSelected', Vars.skinsSelected);

                Wapp.STG.ChangePlayer(e);

            // -----------------------
            // SET BACKGROUND selected
            // -----------------------
            } else if (e.target.dataset.item === 'background') {
                // console.log('change background');

                // set background selected
                Vars.bgSelected = parseFloat(e.target.dataset.index);
                // console.log('bgSelected', Vars.bgSelected);

                Wapp.STG.ChangeBg(e);
            }
        }

        /*
        var
            box = doc.querySelectorAll('.section.modalBuy')[0];

        // show modal confirmation buy
        if (box) {
            // hide
            if (box.classList.contains('active')) {
                box.classList.remove('active');

            // show
            } else {
                box.classList.add('active');
            }
        }
        */

        /*
        var
            value = parseFloat(e.target.dataset.value);

        // console.log('e', e);
        // console.log('e.target', e.target);
        console.log('dataset.info', e.target.dataset.info);
        console.log('value', value);
        console.log('Vars.fruitCount', Vars.fruitCount);

        // check fruits
        if (Vars.fruitCount >= value) {
            Vars.fruitCount = parseFloat(Vars.fruitCount - value);

            console.log('Vars.fruitCount updated', Vars.fruitCount);
            console.log('SHOW CONFIRMATION buy');

        } else {
            console.log('not buy, you need more fruits!');
        }
        */

        e.preventDefault();
        return false;
    };

    /* create background select GUI [for STORE] */
    Wapp.STG.CreateBackgroundSelect = function (e) {
        // console.log(':: CreateBackgroundSelect [fnc]');

        var
            html = '',
            imgName = 'cover.jpg',
            amount = Object.keys(Vars.backgrounds).length;

        // console.log('amount bg', amount);

        [].forEach.call(Object.keys(Vars.backgrounds), function (el, index) {
            // console.log('el', el);

            html += '<!-- slide -->';
            html += '<div class="item">';
                html += '<div class="box">';
                    // html += '<a href="#" class="get" title="' + el + '" data-info="' + el + '">';
                    // html += '<a class="get" title="' + el + '" data-info="' + el + '" data-item="background">';
                    html += '<a>';
                        html += '<img src="thegame/img/backgrounds/' + el + '/' + imgName + '" alt="' + el + '"/>';
                        html += '<p>';
                            // html += '<strong>';
                                // html += el;
                            // html += '</strong>';
                            html += '<em>';
                                html += el;
                            html += '</em>';
                        html += '</p>';
                    html += '</a>';
                html += '</div>';
                html += '<a href="#" title="Buy" class="btnBuy" data-info="' + el + '" data-item="background" data-index="' + index + '">';
                    html += '<i class="sprTreasure sprFruits"></i>';
                    html += '<em>';
                        // html += '9999';
                        html += 'FREE';
                    html += '</em>';
                html += '</a>';
            html += '</div>';
        });

        // append
        if (Vars.boxBackgroundSlc) {
            Vars.boxBackgroundSlc.innerHTML = html;

            // box size
            Vars.boxBackgroundSlc.style.width = parseFloat(amount * 200) + 'px';
        }

        // buy
        [].forEach.call(doc.querySelectorAll('.btnBuy'), function (el) {
            // console.log('el', el);
            el.addEventListener(Vars.deviceEvents[Vars.deviceClient]['click'], Wapp.STG.BuyItems, true);
        });
    };

    /* create music select GUI [for STORE] */
    Wapp.STG.CreateMusicSelect = function (e) {
        // console.log(':: CreateMusicSelect [fnc]');

        // var
        //     html = '';


        // console.log('boxPlayerSlc', Vars.boxPlayerSlc);
        // console.log('skins', Vars.skins);

        /*
        [].forEach.call(Vars.skins, function (el, index) {
            console.log('el', el);

            html += '<!-- slide -->';
            html += '<div class="item">';
                html += '<div class="box">';
                    // html += '<a href="#" title="' + el + '" style="background:#' + randomColor + ';">';
                    html += '<a href="#" class="get" title="' + el + '" data-info="' + el + '">';
                        html += '<i class="' + el + '">';
                        html += '</i>';
                        html += '<p>';
                            html += '<strong>';
                                html += Vars.names[index].split(' ')[0];
                            html += '</strong>';
                            html += '<em>';
                                html += Vars.names[index].split(' ')[1];
                            html += '</em>';
                        html += '</p>';
                    html += '</a>';
                html += '</div>';
            html += '</div>';
        });

        // append
        if (Vars.boxMusicSlc) {
            Vars.boxMusicSlc.innerHTML = html;
        }
        */
    };

    /* create music playlist */
    Wapp.STG.CreateMusicPlaylist = function (e) {
        // console.log(':: CreateMusicPlaylist [fnc]');

        var
            ajax = new XMLHttpRequest();

        // AJAX
        ajax.open('GET', Vars.musicApi, true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200){
                    // SUCCESS
                    // console.log('AJAX - SEND Successfully!',  ajax.responseText);

                    Wapp.STG.PopulatePlaylist(e, ajax.responseText, 'SUCCESS');

                } else {
                    // ERROR
                    // console.log('AJAX - SEND Error!',  ajax.returnText);

                    Wapp.STG.PopulatePlaylist(e, ajax.responseText, 'ERROR');
                }
            }
        };
    };

    /* populate playlist */
    Wapp.STG.PopulatePlaylist = function (e, obj, status) {
        // console.log(':: PopulatePlaylist [fnc]');

        // console.log('e', e);
        // console.log('obj', JSON.parse(obj));
        // console.log('status', status);

        if (status === 'ERROR') {
            return false;
        }

        var
            html = '';

        [].forEach.call(JSON.parse(obj), function (music) {
            // console.log('music', music);

            html += '<li>';
                html += '<p>';
                    html += '<b>';
                        html += music.genre;
                    html += '</b>';
                    html += '<strong>';
                        html += music.track;
                    html += '</strong>';
                    html += '<em>';
                        html += music.artist;
                    html += '</em>';
                html += '</p>';

                // --------------------
                // other providers host
                // --------------------
                // DRIVE
                // --------------------
                if (music.host) {
                    if (music.host === 'drive') {
                        html += '<a href="#" title="Play" class="mPlay" data-file="' + music.url + '" data-name="' + music.track + '" data-artist="' + music.artist + '" data-cover="' + music.cover + '" data-download="' + music.track + '" data-host="' + music.host + '">';
                    }

                // --------------------
                // NCS [default]
                // --------------------
                } else {
                    html += '<a href="#" title="Play" class="mPlay" data-file="' + music.url + '" data-name="' + music.track + '" data-artist="' + music.artist + '" data-cover="' + music.cover + '" data-download="https://ncs.io/music-search?q=' + encodeURI(music.track) + '">';
                }

                    html += '<i class="fa-solid fa-circle-play"></i>';
                html += '</a>';
            html += '</li>';
        });

        if (Vars.musicPlaylist) {
            Vars.musicPlaylist.innerHTML = html;
        }

        // VARS
        // :: music button play :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Vars.musicPlay = doc.querySelectorAll('.section.music ul.playlist li a.mPlay');

        // listeners
        // :: button music play
        Wapp.STG.AddEvents('click', Vars.musicPlay, Wapp.STG.MusicControls, true);
    };

    /* create offers banners */
    Wapp.STG.CreateOffers = function (e) {
        // console.log(':: CreateOffers [fnc]');

        var
            ajax = new XMLHttpRequest();

        // AJAX
        ajax.open('GET', Vars.offersApi, true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send();

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200){
                    // SUCCESS
                    // console.log('AJAX - SEND Successfully!',  ajax.responseText);

                    Wapp.STG.PopulateOffers(e, ajax.responseText, 'SUCCESS');

                } else {
                    // ERROR
                    // console.log('AJAX - SEND Error!',  ajax.returnText);

                    Wapp.STG.PopulateOffers(e, ajax.responseText, 'ERROR');
                }
            }
        };
    };

    /* populate offers */
    Wapp.STG.PopulateOffers = function (e, obj, status) {
        // console.log(':: PopulateOffers [fnc]');

        // console.log('e', e);
        // console.log('obj', JSON.parse(obj));
        // console.log('status', status);

        if (status === 'ERROR') {
            return false;
        }

        var
            html = '',
            x = 0,
            amount = JSON.parse(obj).length;

        // console.log('amount', amount);

        [].forEach.call(JSON.parse(obj), function (offer) {
            // console.log('offer', offer);

            html += '<li>';
                html += '<a href="' + offer.url + '" title="' + offer.name + '" target="_blank">';
                    html += '<p>';
                        html += '<strong>';
                            html += offer.name;
                        html += '</strong>';
                        html += '<img src="' + offer.img + '" alt="' + offer.name + '"/>';
                    html += '</p>';
                html += '</a>';
            html += '</li>';
        });

        // append
        if (Vars.boxOffers) {
            Vars.boxOffers.innerHTML = html;
        }

        // automatic scroll
        setInterval(function () {
            if (x === amount) {
                x = 0;

            } else {
                x ++;
            }

            Vars.boxOffers.scrollTo({
                top: parseFloat(45 * x),
                behavior: 'smooth'
            });
        }, 4000);
    };

    /* generate randomic fruits */
    Wapp.STG.RandomFruit = function (e) {
        // console.log(':: RandomFruit [fnc]');

        var
            pos = Math.floor(Math.random() * 100),
            random = Math.floor(Math.random() * Vars.fruitsItems.length),
            fruit = doc.createElement('I'),
            obj = {};

        obj.pos = pos;
        obj.random = random;
        obj.fruit = fruit;

        return obj;
    };

    /* create randomic fruits items */
    Wapp.STG.CreateFruit = function (e) {
        // console.log(':: CreateFruit [fnc]');

        // disabled fruits creation
        // player OUT box fruits
        if (Vars.fruitsBg === false) {
            // console.log('not CREATE fruits');
            return false;
        }

        // console.log('CREATE fruits');

        var
            // pos = Math.floor(Math.random() * 100),
            // random = Math.floor(Math.random() * Vars.fruitsItems.length),
            // fruit = doc.createElement('I'),
            pos = '',
            random = '',
            fruit = '',
            obj = '',
            x = 0,
            fruitInt = '',
            playerRect = '',
            fruitRect = '',
            marginColision = 20;

        // ----------------
        // GET RANDOM ITEMS
        // ----------------
        obj = Wapp.STG.RandomFruit();
        // console.log('obj', obj);

        pos = obj.pos;
        random = obj.random;
        fruit = obj.fruit;
        // ----------------

        // console.log('Vars.fruitsItems', Vars.fruitsItems);
        // console.log('Vars.fruitsItems[random]', Vars.fruitsItems[random]);

        // -------------------
        // CHECK FRUIT ENABLED
        // -------------------
        // if (Vars.fruitsBg === true) {
            // append
            if (Vars.boxFruit) {
                // for COLISION
                playerRect = Vars.player.getBoundingClientRect();

                // set element class
                fruit.classList.add('sprFruits01', Vars.fruitsItems[random]);

                // console.log('pos', pos);

                // fruit.style.left = 'calc(50vw - ' + pos + 'px)';
                fruit.style.left = pos + '%';

                ///////////////////////////////////////
                // VERIFY POSITION FOR COLISION
                // player and fruit
                ///////////////////////////////////////
                /*
                var
                    player = document.querySelectorAll('.player')[0],
                    fruit01 = document.querySelectorAll('#el01')[0],
                    fruit02 = document.querySelectorAll('#el02')[0],
                    rect = '';

                rect = player.getBoundingClientRect();
                //console.log('player', rect.top, rect.right, rect.bottom, rect.left);
                console.log('player top', rect.top);
                console.log('player left', rect.left);

                rect = fruit01.getBoundingClientRect();
                console.log('fruit01 top', rect.top);
                console.log('fruit01 left', rect.left);

                rect = fruit02.getBoundingClientRect();
                console.log('fruit02 top', rect.top);
                console.log('fruit02 left', rect.left);
                */
                ///////////////////////////////////////

                // --------------------------------
                // animate fruit [move DOWN]
                // --------------------------------
                fruitInt = setInterval(function () {
                    // x++;
                    x = x + 0.5;

                    fruit.style.top = x + '%';
                    // console.log('x', x);

                    // for COLISION
                    fruitRect = fruit.getBoundingClientRect();

                    // ----------------------------------
                    // ::::::::::::::::::::::::::::::::::
                    // DETECT COLISION [~PLAYER x ~FRUIT]
                    // ::::::::::::::::::::::::::::::::::
                    // ----------------------------------
                    if ((fruitRect.left <= (playerRect.left + marginColision)) && (fruitRect.left >= (playerRect.left - marginColision))) {
                        if (fruitRect.top >= (playerRect.top - (marginColision / 2))) {
                            // console.log('colision');
                            // console.log('FRUIT COLISION', fruit);

                            if (!fruit.classList.contains('active')) {
                                // ----------------
                                // ENABLED EFFECT
                                // ----------------
                                fruit.classList.add('active');
                                // ----------------

                                // ----------------
                                // ENABLED SOUND
                                // ----------------
                                Wapp.STG.Sounds(e, Vars.audioFiles[0]);
                                // console.log('audio coin play');
                                // ----------------

                                // ----------------
                                // INCREMENT AMOUNT
                                // ----------------
                                Vars.fruitCount ++;
                                // ----------------

                                if (doc.querySelectorAll('.fruits')[0]) {
                                    doc.querySelectorAll('.fruits')[0].innerHTML = Vars.fruitCount;
                                }
                            }
                        }
                    }
                    // ----------------------------------

                    // STOP ANIMATION
                    // 80% (0 - 80) [move position TOP - DOWN]
                    // if (x >= 80) {
                    if (x >= 95) {
                        clearInterval(fruitInt);

                        // ------------
                        // remove fruit
                        // ------------
                        setTimeout(function () {
                            fruit.remove();
                        }, 1000);
                    }
                }, 35);
                // --------------------------------

                Vars.boxFruit.appendChild(fruit);

                // ---------------------
                // increment FRUIT COUNT
                // ---------------------
                // Vars.fruitCount ++;
                // ---------------------
            }

            // console.log('FRUITS AMOUNT', Vars.fruitCount);
        // }
        // -------------------

        // e.preventDefault();
        // return false;
    };

    /* start game */
    Wapp.STG.StartGame = function (e) {
        // console.log(':: StartGame [fnc]');

        var
            genFruitInt = '';
            // genFruitCount = 0;

        // --------------
        // ENABLED EVENTS
        // --------------

        // console.log('DEVICE TYPE >>>', Vars.deviceClient);

        // ::::::::::::::::::
        // EVENTS FOR DESKTOP
        // ::::::::::::::::::
        if (Vars.deviceClient === 'desktop') {
            // ---------------------------------------
            // :: navigation controls
            // ---------------------------------------
            // Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['click'], Vars.keys, Wapp.STG.Controls, true);
            // Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['mousedown'], Vars.keys, Wapp.STG.Controls, true);
            // Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['mouseup'], Vars.keys, Wapp.STG.Controls, true);
            Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['mouseenter'], Vars.keys, Wapp.STG.Controls, true);
            Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['mouseout'], Vars.keys, Wapp.STG.Controls, true);
            // Wapp.STG.AddEvents(Vars.deviceEvents[Vars.deviceClient]['mousemove'], Vars.keys, Wapp.STG.Controls, true);
            // win.addEventListener(Vars.deviceEvents[Vars.deviceClient]['selectstart'], Wapp.STG.Controls, true);
            // win.addEventListener(Wapp.STG.Device('selectionchange'), Wapp.STG.Controls, true);
            // win.addEventListener(Vars.deviceEvents[Vars.deviceClient]['contextmenu'], Wapp.STG.Controls, true);
            // ---------------------------------------
            // :: keyboard events
            // ---------------------------------------
            win.addEventListener(Vars.deviceEvents[Vars.deviceClient]['keydown'], Wapp.STG.Key, true);
            win.addEventListener(Vars.deviceEvents[Vars.deviceClient]['keyup'], Wapp.STG.Key, true);

        // :::::::::::::::::
        // EVENTS FOR MOBILE
        // :::::::::::::::::
        } else if (Vars.deviceClient === 'mobile') {
            // ---------------------------------------
            // :: navigation controls
            // ---------------------------------------
            (Vars.controlsMob) ? Vars.controlsMob.addEventListener('touchstart', Wapp.STG.ControlsMob, true) : '';
            (Vars.controlsMob) ? Vars.controlsMob.addEventListener('touchmove', Wapp.STG.ControlsMob, true) : '';
            (Vars.controlsMob) ? Vars.controlsMob.addEventListener('touchend', Wapp.STG.ControlsMob, true) : '';
        }

        // --------------------
        // DISABLED STARTSCREEN
        // --------------------
        if (Vars.boxStart) {
            Vars.boxStart.classList.add('opacity');

            setTimeout(function () {
                Vars.boxStart.remove();
            }, 1000);
        }

        // --------------
        // ENABLED FRUITS
        // --------------
        // enabled fruits creation
        // player IN box fruits
        // if (Vars.fruitsBg === true) {
            genFruitInt = setInterval(function () {
                // Vars.btnFruit.click();
                Wapp.STG.CreateFruit();

                // amount MAX fruits
                // if (genFruitCount >= 3000) {
                //     clearInterval(genFruitInt);
                // }

                // genFruitCount ++;

            // time for create FRUIT
            }, 850);

        // disabled fruits creation
        // player OUT box fruits
        // } else {
        //     clearInterval(genFruitInt);
        // }

        e.preventDefault();
        return false;
    };

    /* show | hide playlist music */
    Wapp.STG.MusicPlaylist = function (e) {
        // console.log(':: MusicPlaylist [fnc]');

        // box music player
        if (Vars.boxMusicPlayer) {
            if (Vars.boxMusicPlayer.classList.contains('active')) {
                Vars.boxMusicPlayer.classList.remove('active');

            } else {
                Vars.boxMusicPlayer.classList.add('active');
            }
        }

        // music playlist
        // if (Vars.musicPlaylist) {
        //     if (Vars.musicPlaylist.classList.contains('active')) {
        //         Vars.musicPlaylist.classList.remove('active');

        //     } else {
        //         Vars.musicPlaylist.classList.add('active');
        //     }
        // }

        e.preventDefault();
        return false;
    };

    /* controls for music player */
    Wapp.STG.MusicControls = function (e) {
        // console.log(':: MusicControls [fnc]');

        var
            file = e.target.dataset.file,
            name = e.target.dataset.name,
            artist = e.target.dataset.artist,
            // cover = e.target.dataset.cover,
            download = e.target.dataset.download,
            host = e.target.dataset.host,
            infosMusic = '';

        // console.log('cover', 'https://ncsmusic.s3.eu-west-1.amazonaws.com' + cover + '.jpg');

        // change cover
        // if (Vars.musicPlaylist) {
        //     Vars.musicPlaylist.style.backgroundImage = 'url(https://ncsmusic.s3.eu-west-1.amazonaws.com' + cover + ')';
        // }
        console.log('DISABLED > coverMusic');

        infosMusic += '<p>';
            infosMusic += '<strong>';
                infosMusic += name;
            infosMusic += '</strong>';
            infosMusic += '<em>';
                infosMusic += artist;
            infosMusic += '</em>';
        infosMusic += '</p>';
        infosMusic += '<a href="' + download + '" title="Download" class="mDownload" target="_blank">';
            // infosMusic += '<i class="fa-solid fa-copyright"></i>';
            infosMusic += '<i class="fa-solid fa-headphones"></i>';
        infosMusic += '</a>';

        // ---------------------
        // PLAY MUSIC
        // ---------------------
        if (e.target.title === 'Play') {
            // console.log('PLAY MUSIC');

            // reset all buttons play music
            [].forEach.call(doc.querySelectorAll('.mPlay'), function (el) {
                // console.log('el', el);

                // set play title
                el.title = 'Play';

                // set play button
                if (el.querySelectorAll('i')[0]) {
                    // el.querySelectorAll('span')[0].textContent = 'play_circle';
                    el.querySelectorAll('i')[0].className = 'fa-solid fa-circle-play';
                }

                // reset music active
                if (el.parentElement) {
                    el.parentElement.classList.remove('active');
                }
            });

            // set pause title
            e.target.title = 'Pause';

            // set pause button
            if (e.target.querySelectorAll('i')[0]) {
                // e.target.querySelectorAll('span')[0].textContent = 'pause_circle';
                e.target.querySelectorAll('i')[0].className = 'fa-solid fa-circle-pause';
            }

            // set music active
            if (e.target.parentElement) {
                e.target.parentElement.classList.add('active');
            }

            if (file) {
                if (Vars.musicPlayer) {

                    // --------------------
                    // other providers host
                    // --------------------
                    // DRIVE
                    // --------------------
                    if (host) {
                        if (host === 'drive') {
                            // SET FILE
                            Vars.musicPlayer.src = file;
                        }

                    // --------------------
                    // NCS [default]
                    // --------------------
                    } else {
                        // SET FILE
                        Vars.musicPlayer.src = 'https://ncsmusic.s3.eu-west-1.amazonaws.com' + file + '.mp3';
                    }

                    // LOAD
                    Vars.musicPlayer.load();
                    Vars.musicPlayer.addEventListener('loadeddata', Wapp.STG.MusicPlay, true);

                    // change title playing
                    if (doc.querySelectorAll('.section.music .playing')[0]) {
                        doc.querySelectorAll('.section.music .playing')[0].innerHTML = infosMusic;
                    }
                }
            }

        // ---------------------
        // PAUSE MUSIC
        // ---------------------
        } else if (e.target.title === 'Pause') {
            // console.log('PAUSE MUSIC');

            // reset all buttons play music
            [].forEach.call(doc.querySelectorAll('.mPlay'), function (el) {
                // console.log('el', el);

                // set play title
                el.title = 'Play';

                // set play button
                if (el.querySelectorAll('i')[0]) {
                    // el.querySelectorAll('span')[0].textContent = 'play_circle';
                    el.querySelectorAll('i')[0].className = 'fa-solid fa-circle-play';
                }

                // reset music active
                if (el.parentElement) {
                    el.parentElement.classList.remove('active');
                }
            });

            // e.target.title = 'Play';

            if (Vars.musicPlayer) {
                // reset PPROGRESS BAR
                if (Vars.musicBar) {
                    // Vars.musicBar.value = 0;
                    Vars.musicBar.style.width = 0;
                }

                // TIME UPDATE
                // Vars.musicPlayer.addEventListener('timeupdate', Wapp.STG.MusicTime, true);

                // PLAY
                Vars.musicPlayer.pause();
            }
        }

        // hide box music player
        if (Vars.boxMusicPlayer) {
            if (Vars.boxMusicPlayer.classList.contains('active')) {
                Vars.boxMusicPlayer.classList.remove('active');

            } else {
                Vars.boxMusicPlayer.classList.add('active');
            }
        }

        e.preventDefault();
        return false;
    };

    /* play music */
    Wapp.STG.MusicPlay = function (e) {
        // console.log(':: MusicPlay [fnc]');

        if (Vars.musicPlayer) {
            // reset PPROGRESS BAR
            if (Vars.musicBar) {
                // Vars.musicBar.value = 0;
                Vars.musicBar.style.width = 0;
            }

            // TIME UPDATE
            Vars.musicPlayer.addEventListener('timeupdate', Wapp.STG.MusicTime, true);

            // SET VOLUME
            Vars.musicPlayer.volume = 1;

            // PLAY
            Vars.musicPlayer.play();
        }

        e.preventDefault();
        return false;
    };


    // pause_circle
    // play_circle

    /* time update music */
    Wapp.STG.MusicTime = function (e) {
        // console.log(':: MusicTime [fnc]');

        // console.log('currentTime', Vars.musicPlayer.currentTime);
        // console.log('duration', Vars.musicPlayer.duration);
        // console.log('-------------');

        if (Vars.musicBar) {
            // Vars.musicBar.value = (Vars.musicPlayer.currentTime / Vars.musicPlayer.duration);
            Vars.musicBar.style.width = parseFloat((Vars.musicPlayer.currentTime / Vars.musicPlayer.duration) * 100) + '%';
        }

        // e.preventDefault();
        // return false;
    };

    /* change resources quality */
    Wapp.STG.ChangeQuality = function (e) {
        // console.log(':: ChangeQuality [fnc]');

        if (e.target.value === 'yes') {
            doc.body.classList.add('high');

        } else if (e.target.value === 'no') {
            doc.body.classList.remove('high');
        }

        e.preventDefault();
        return false;
    };

    /* change cursor style */
    Wapp.STG.ChangeCursor = function (e) {
        // console.log(':: ChangeCursor [fnc]');

        // reset cursors
        doc.body.classList.remove('curWhite');
        doc.body.classList.remove('curBlack');
        doc.body.classList.remove('curBlue');

        // set cursors
        if (e.target.value === 'curWhite') {
            doc.body.classList.add('curWhite');

        } else if (e.target.value === 'curBlack') {
            doc.body.classList.add('curBlack');

        } else if (e.target.value === 'curBlue') {
            doc.body.classList.add('curBlue');
        }

        e.preventDefault();
        return false;
    };

    /* change language */
    Wapp.STG.ChangeLanguage = function (e) {
        console.log(':: ChangeLanguage [fnc]');
        console.log('>> in development');

        // s
        // Free and Open Source Machine Translation API
        // https://libretranslate.com/

        // var
        //     res = await fetch("https://libretranslate.de/translate", {
        //         method: "POST",
        //         body: JSON.stringify({
        //             //q: "<div class=\"noChange\">hi brow</div> ",
        //             q: doc.body.innerHTML,
        //             source: "en",
        //             target: e.target.value,
        //             format: "html"
        //         }),
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     });

        /*
        var
            ajax = new XMLHttpRequest(),
            //box = doc.createElement('DIV'),
            html = doc.querySelectorAll('.section.startScreen')[0].outerHTML,
            data = {
                // q: "<div class=\"noChange\">hi brow</div>",
                q: html,
                source: "en",
                target: e.target.value,
                format: "html"
            };

        console.log('html', html);

        // box.innerHTML = html;
        // console.log('box', box);

        // return false;

        // AJAX
        ajax.open('POST', 'https://libretranslate.de/translate', true);
        ajax.setRequestHeader('Content-Type', 'application/json');
        ajax.send(JSON.stringify(data));

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                if (ajax.status === 200){
                    // SUCCESS
                    // console.log('AJAX - SEND Successfully!',  ajax.responseText);
                    console.log('AJAX - SEND Successfully!',  JSON.parse(ajax.responseText).translatedText);

                    // Wapp.STG.PopulatePlaylist(e, ajax.responseText, 'SUCCESS');

                } else {
                    // ERROR
                    console.log('AJAX - SEND Error!',  ajax.returnText);

                    // Wapp.STG.PopulatePlaylist(e, ajax.responseText, 'ERROR');
                }
            }
        };

        // console.log(await res.json());
        */

        e.preventDefault();
        return false;
    };

    /* convert XML to JSON */
    Wapp.STG.XmlToJson = function (xml) {
        // console.log(':: XmlToJson [fnc]');

        /**
         * Changes XML to JSON
         * Modified version from here: http://davidwalsh.name/convert-xml-json
         * @param {string} xml XML DOM tree
        */

        // function xmlToJson(xml) {
          // Create the return object
          var obj = {};

          if (xml.nodeType == 1) {
            // element
            // do attributes
            if (xml.attributes.length > 0) {
              obj["@attributes"] = {};
              for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
              }
            }
          } else if (xml.nodeType == 3) {
            // text
            obj = xml.nodeValue;
          }

          // do children
          // If all text nodes inside, get concatenated text from them.
          var textNodes = [].slice.call(xml.childNodes).filter(function(node) {
            return node.nodeType === 3;
          });
          if (xml.hasChildNodes() && xml.childNodes.length === textNodes.length) {
            obj = [].slice.call(xml.childNodes).reduce(function(text, node) {
              return text + node.nodeValue;
            }, "");
          } else if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
              var item = xml.childNodes.item(i);
              var nodeName = item.nodeName;
              if (typeof obj[nodeName] == "undefined") {
                // obj[nodeName] = xmlToJson(item);
                obj[nodeName] = Wapp.STG.XmlToJson(item);
              } else {
                if (typeof obj[nodeName].push == "undefined") {
                  var old = obj[nodeName];
                  obj[nodeName] = [];
                  obj[nodeName].push(old);
                }
                // obj[nodeName].push(xmlToJson(item));
                obj[nodeName].push(Wapp.STG.XmlToJson(item));
              }
            }
          }
          return obj;
        // }

        /*
        Usage:
        1. If you have an XML file URL:
        const response = await fetch('file_url');
        const xmlString = await response.text();
        var XmlNode = new DOMParser().parseFromString(xmlString, 'text/xml');
        xmlToJson(XmlNode);
        2. If you have an XML as string:
        var XmlNode = new DOMParser().parseFromString(yourXmlString, 'text/xml');
        xmlToJson(XmlNode);
        3. If you have the XML as a DOM Node:
        xmlToJson(YourXmlNode);
        */
    };

    /* offers */
    Wapp.STG.Offers = function () {
        // console.log(':: Offers [fnc]');

        [].forEach.call(Vars.offers, function (el, index) {
            // console.log('el', el);
            // console.log('thumbnail', el.thumbnail);
            // console.log('name', el.name);
            // console.log('description', el.description);
            // console.log('price', el.price);
            // console.log('sku', el.sku);
            // console.log('link', el.link);
            // console.log('---');
        });
    };

    /* sliders */
    Wapp.STG.Sliders = function () {
        // console.log(':: Sliders [fnc]');

        // --------------
        // slider PLAYERS
        // --------------
        $('.sldPlayers').owlCarousel({
            loop:false,
            margin:2.5,
            items:4,
            dots:false,
            nav:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                }
            }
        });

        // ------------------
        // slider BACKGROUNDS
        // ------------------
        $('.sldBackgrounds').owlCarousel({
            loop:false,
            margin:2.5,
            items:4,
            dots:false,
            nav:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                }
            }
        });

        // -------------
        // slider MUSICS
        // -------------
        $('.sldMusics').owlCarousel({
            loop:false,
            margin:2.5,
            items:4,
            dots:false,
            nav:true,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                }
            }
        });
    };

    /* ::::::::::::::: */
    /* CHANGE FILTERS */
    /*
        create object,
        edit object,
        add attribute in element [filter = style]
    */
    /*
    var
        doc = document,
        win = window,
        img = doc.querySelectorAll('.section.content figure img')[0],
        input = doc.querySelectorAll('input[type="range"]'),
        Change = '',
        stl = {
            'hue-rotate'    : '0deg',
            'invert'        : '0%',
            'saturate'      : '100%',
            'sepia'         : '0%',
            'brightness'    : '100%',
            'contrast'      : '100%',
            'grayscale'     : '0%'
        };

    Change = function (e) {
        var
            name = e.target.name,
            fName = '',
            style = '';

        // edit obj
        if (stl[name]) {
            if (name === 'hue-rotate') {
                stl[name] = e.target.value + 'deg';

            } else if (name === 'invert') {
                stl[name] = e.target.value + '%';

            } else if (name === 'saturate') {
                stl[name] = e.target.value + '%';

            } else if (name === 'sepia') {
                stl[name] = e.target.value + '%';

            } else if (name === 'brightness') {
                stl[name] = e.target.value + '%';

            } else if (name === 'contrast') {
                stl[name] = e.target.value + '%';

            } else if (name === 'grayscale') {
                stl[name] = e.target.value + '%';
            }
        }

        // create style
        for (fName in stl) {
            style += fName + '(' + stl[fName] + ') ';
        }

        img.style.filter = style;
    };

    // add events
    [].forEach.call(input, function (el) {
        el.addEventListener('input', Change, true);
    });
    */
    /* /CHANGE FILTERS */
    /* ::::::::::::::: */

    /* instantiation this module in window load */
    win.addEventListener('DOMContentLoaded', Wapp.STG.Init, true);

    /* manual init */
    // Wapp.STG.Init();

})(window, document, 'Private');