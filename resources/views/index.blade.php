<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>NetLife</title>
    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/frontend.css">
    <link href='//fonts.googleapis.com/css?family=Lora:400' rel='stylesheet' type='text/css'><script src="//s3-ap-northeast-1.amazonaws.com/justfont-user-script/jf-61400.js"></script>
</head>
<script src="/js/app.js"></script>
<script src="/js/frontend.js"></script>
<body>
    <div id="section0" class="container">
        <div class="row h-100">
            <a class="logo" href="/">
                <img src="/img/logo.svg" alt="logo">
            </a>
            <img class="line" src="/img/line.svg" alt="">
            <div class="nav">
                <a onclick="changeVisible(1)">介紹數位成癮</a>
                <a onclick="changeVisible(4)">數位成癮之危害</a>
                <a onclick="changeVisible(7)">不可逆影響</a>
                <a onclick="changeVisible(8)">預防數位成癮</a>
                <a onclick="changeVisible(9)">關於我們</a>
            </div>
            <div class="banner">
                <img class="noise" src="/img/noise.svg" alt="">
                <img id="people1" src="/img/people.svg" alt="people">
                <img id="people2" src="/img/people.svg" alt="people">
                <img id="people3" src="/img/people.svg" alt="people">
                <img id="people4" src="/img/people.svg" alt="people">
                <img id="people5" src="/img/people.svg" alt="people">
                <img id="people6" src="/img/people.svg" alt="people">
                <img class="notFound" src="/img/404.svg" alt="404">
                <img id="nai" class="intro-title" src="/img/nai.svg" alt="">
                <img id="te" class="intro-title" src="/img/te.svg" alt="">
                <img id="rien" class="intro-title" src="/img/rien.svg" alt="">
                <img id="shieng" class="intro-title" src="/img/shieng.svg" alt="">
                <div id="ybox--1" class="ybox ybox--header active">
                    <span class="ybox__close"></span>
                    <h4 class="text introduction-text">隨著數位科技的進步，數位化社會已成為全球趨勢。在我國政府的政策積極推動下，台灣的網路普及率逐年攀升，國人已逐漸習慣使用數位科技解決生活中的問題，在潛移默化之中對數位科技產生高強度的依賴性，已改變我們的生活模式。當使用者擁有不健康的使用習慣時，容易造成現實生活與虛擬世界之間出現嚴重失衡，影響自身心理和生理的健康，以及家庭、學業或職場不順等問題。如何健康的使用數位科技是當代人們需要重視的議題。</h4>
                </div>
            </div>
        </div>
    </div>
    <div id="section1" class="Container">
        <div class="row h-100">
            <div class="col-sm-9 col-12">
                <div id="title-1" class="title-bg h-2">
                    <h2 class="title">您知道什麼是「數位成癮」嗎？</h2>
                </div>
                <h4 id="text-1" class="text">現代人經常使用網路去完成日常生活中各式各樣的需求，要完成需求就必須要有載具，例如：智慧手機、電腦、平板、智慧手錶．．．等等，這些都被稱作為「數位產品」。<br><br>
                    人們使用數位產品，就如同使用網路一樣，都先從習慣數位產品的存在，隨著使用次數增加而養成習慣，最後應用的次數更多了就開始依賴。這個從適應到依賴，最後恐變成「不使用就會不舒服」，這種階段變化最後被稱之為「數位成癮」。<br><br>
                    基本上「數位成癮」就跟所有成癮行為一樣。可能是日常生活造成壓力，也可能是人際關係，使用者為了轉移目標而過度使用數位產品，甚至出現濫用和依賴的行為，此種情況相當常見。
                </h4>
                <svg class="circle circle-1" viewbox="-50 -50 100 100">
                    <circle cx="0" cy="0" r="15">
                        <animate attributeName="r" dur="3s" values="15;30;15" repeatCount="indefinite"></animate>
                    </circle>
                </svg>
                <div class="rectangle rectangle-1"></div>
                <img id="gif-1" src="/img/01.gif" alt="">
            </div>
        </div>
    </div>
    <div id="section2" class="Container">
        <div class="row h-100">
            <div class="effect">
                <img id="gif-2" src="/img/02.gif" alt="">
            </div>
            <div class="col-sm-9 col-12">
                <div id="title-2" class="title-bg h-2">
                    <h2 class="title">「數位成癮」常見型態有哪些呢？</h2>
                </div>
                <h4 class="text">每個人使用數位產品的目的和用途不盡相同，因此造就使用者染上不同型態的數位成癮。例如：網路遊戲成癮、色情網站成癮、社群網站成癮、影音網站成癮、網路文學網站成癮、漫畫網站成癮等。其中又以『網路遊戲成癮』最常見。</h4>
                <svg class="circle circle-2" viewbox="-50 -50 100 100">
                    <circle cx="0" cy="0" r="15">
                        <animate attributeName="r" dur="2.5s" values="10;30;10" repeatCount="indefinite"></animate>
                    </circle>
                </svg>
                <svg id="svg-1" class="rectangle rectangle-2" viewbox="-50 -50 100 100">
                    <circle cx="0" cy="0" r="10"></circle>
                    <g>
                        <line x1="0" y1="-20" y2="20"></line>
                        <line x1="-20" y1="0" x2="20"></line>
                        <rect x="-20" y="-20" width="40" height="40"></rect>
                        <animateTransform attributeName="transform" type="rotate" dur="3s" values="0;360" repeatCount="indefinite"></animateTransform>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <div id="section3" class="Container">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="tech-slideshow">
                <div class="mover-1"></div>
            </div>
            <div class="col-sm-9 col-12">
                <div id="title-3" class="title-bg h-2">
                    <h2 class="title">造成數位成癮的常見因素</h2>
                </div>
                <h4 id="text-3" class="text">
                    判斷數位成癮的特徵有以下三項：<br>
                    1.強迫使用（Compulsive behavior）：沒想要使用數位產品，卻無法自拔的去使用網路，或者使用數位產品的時間比自己預期的還要來得多，簡單地說就是「停不下來」。<br>
                    2.耐受性（Tolerance）：隨著成癮的程度越高，你就會需要更多的數位產品使用時間，如此一來，才能達到與前次經驗相同的爽快效果。<br>
                    3.戒斷症狀（Withdrawal symptoms）：如果你是酒鬼或者是老煙槍，強迫你不抽煙或不喝酒，身體會出現一些劇烈的生理反應，比方說煩躁、容易發怒、注意力不集中、四肢無力、憂鬱、焦慮等等，這些生／心理反應我們就稱之為戒斷症狀。<br>

                    假如你已經有這些特徵，可能要多注意一下自己的狀況，或是尋求專業諮詢協助。
                </h4>
                {{-- <p>#人際疏離  #依戀匿名交友  #犧牲睡眠上網  #頻繁注意網路訊息  #過度依賴網路功能</p> --}}
            </div>
        </div>
    </div>
    <div id="section4" class="Container">
        <div class="row h-100 justify-content-center">
            <img id="plaint" src="/img/plaint.svg" alt="plaint">
            <div class="col-sm-9 col-12">
                <div id="title-4" class="title-bg h-2 title-red">
                    <h2 class="title">「數位成癮」是一種病嗎？</h2>
                </div>
                <h4 id="text-4" class="text">網路成癮為網路使用普及後新興的名詞，最早提出「網路成癮症」說法的是紐約的醫生登伯格(Ivan Goldenberg)，它在1995年就率先使用「網路成癮症」一詞，匹茲堡大學教授楊恩(Kimberly Young)更建立了問卷，以判斷是否已有「網路成癮」的症狀。
                </h4>
                <div class="roatate-img">
                    <img class="center" src="/img/roatate-center.svg" alt="">
                    <img class="route" src="/img/roatate.svg" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="section5" class="Container">
        <div class="row h-100 align-items-center justify-content-center">
           <img id="warnning" src="/img/warnning.svg" alt="">
            <div class="col-sm-9 col-12">
                <h4 id="text-5" class="text">
                    有時，以下的名稱也被用來指代網路成癮症：<br>
                    1.過度使用網路(Internet overuse)<br>
                    2.不當電腦使用(problematic computer use)<br>
                    3.強迫型的網路使用(compulsive Internet use)<br>
                    4.網路濫用(Internet abuse)<br>
                    5.有害的網路使用（harmful use of the Internet）<br>
                    6.網路依賴（Internet dependency）

                </h4>
            </div>
            <img id="arrow-5" src="/img/arrow.svg" alt="">
            <img id="file" src="/img/file.svg" alt="">
        </div>
    </div>
    <div id="section6" class="Container">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-sm-9 col-12">
                <div id="title-6" class="title-bg h-2 title-red">
                    <h2 class="title">網路成癮與數位成癮的關聯性?</h2>
                </div>
                <img id="clip" src="/img/clip.svg" alt="">
                <h4 id="text-6" class="text">
                    想要使用網路，必然需要數位產品作為工具，當人們習慣使用數位產品，漸漸習慣數位產品的存在，從習慣到依賴，再從依賴到具有強迫性，這種階段變化最後被稱之為「數位成癮」。<br>
                    人們使用數位產品的原因百百種，但基本上「數位成癮」就跟所有成癮行為一樣。可能是日常生活造成壓力，也可能是人際關係，使用者為了轉移目標而過度使用數位產品，甚至出現濫用和依賴的行為，此種情況相當常見。
                </h4>
            </div>
        </div>
    </div>
    <div id="section7" class="Container">
        <div class="row h-100 align-items-center justify-content-center">
            <img id="arrow-7" src="/img/arrow.svg" alt="">
            <div class="col-sm-9 col-12">
                <div id="title-7" class="title-bg h-2">
                    <h2 class="title">「數位成癮」會造成什麼影響呢？</h2>
                </div>
                <h4 id="text-7" class="text">
                    每個人使用數位產品的目的和用途不一樣，因此成癮的原因也不盡相同，數位成癮帶來的影響大致可以分為層面身理和心理層面，例如：有些人因工作不得不長時間依賴手機，導致自己不時時刻刻關注通知就會渾身不舒服；有些人在現實中得不到關愛，而將情感投注在虛擬世界的交流。其中又以視力衰退、生活作息錯亂、無法專注、社交障礙、家庭溝通不良最為常見。
                </h4>
            </div>
        </div>
    </div>
    <div id="section8" class="Container">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-sm-9 col-12">
                <div id="title-8" class="title-bg h-2">
                    <h2 class="title">「數位成癮」該如何預防呢？</h2>
                </div>
                <h4 id="text-8" class="text">「數位成癮」該如何預防呢？
                    預防數位成癮最好的方法是以個人為出發點，自行檢視自己的使用習慣，自行找到適合自己的使用模式。而預防的方法依序分為四個步驟：觀察、分析、規劃、執行。
                </h4>
                <div class="row h-50 step-main" style="display: flex">
                    <div class="step">
                        <img class="step-img" src="/img/observation.svg" alt="observation">
                        <div class="block">
                            <h5>觀察</h5>
                            <p>紀錄自己的使用時長，觀察自己的使用模式。大致觀察１個月即可。</p>
                        </div>
                    </div>
                    <div class="step">
                        <img class="step-img" src="/img/planning.svg" alt="planning">
                        <div class="block">
                            <h5>分析</h5>
                            <p>分析自己的使用習慣，找出自己的使用習慣，發現自己沉迷的關鍵點，審視自己目前的使用習慣是否合理。</p>
                        </div>
                    </div>
                    <div class="step">
                        <img class="step-img" src="/img/analysis.svg" alt="analysis">
                        <div class="block">
                            <h5>規劃</h5>
                            <p>根據分析結果，規劃合適的使用時間表，照表操課督促自己改變使用習慣。</p>
                        </div>
                    </div>
                    <div class="step">
                        <img class="step-img" src="/img/execution.svg" alt="execution">
                        <div class="block">
                            <h5>執行</h5>
                            <p>一人執行總是特別寂寞，但你可以把執行項目當作每日打卡，培養其他興趣，多與親友接觸使自己分心。也可以尋找夥伴一起加油。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="section9" class="Container">
        <div class="row h-100">
            <div class="col-sm-8 col-12">
                <div id="title-7-1" class="title-bg h-2">
                    <h2 class="title">關於我們</h2>
                </div>
                <h4 class="text text-9">我就如同一艘小船行經在名為數位科技的水域上，水帶給我們方便，也能將我們覆滅。我們想利用網站有系統地呈現一套針對『數位成癮』的學習資源，以提升家長與孩子對數位成癮的認知，一起學習健康的使用習慣。讓家長放心孩子們使用數位科技，孩子擁有更豐富的學習資源。</h4>
            </div>
            <div class="col-sm-8 col-12 ml-sm-5">
                <div id="title-7-2" class="title-bg h-2">
                    <h2 class="title">理念誕生</h2>
                </div>
                <h4 class="text text-9">在數位時代成長的我們，比父母輩擁有更多的資源可以自由學習，但數位的世界充滿豐富刺激的體驗，孩子們容易被受吸引，甚至養成不當的使用習慣。父母們常選擇極端的方式禁止孩子使用，經常導致嚴重的家庭問題，甚至讓孩子們失去一個學習的管道。我們希望透過資源整合的方式，提升家長與孩子對於數位成癮的認知，共同學習數位健康的的重要。</h4>
            </div>
            <svg viewBox="0 0 160 160" width="160" height="160">
                <circle cx="80" cy="80" r="50" fill="#0F3480"/>
                <g transform=" matrix(0.866, -0.5, 0.25, 0.433, 80, 80)">
                  <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z" fill="#FFF">
                    <animateTransform attributeName="transform" type="rotate" from="360 0 0" to="0 0 0" dur="1s" repeatCount="indefinite" />
                  </path>
                </g>
                <path d="M 50,0 A 50,50 0 0,0 -50,0Z" transform="matrix(0.866, -0.5, 0.5, 0.866, 80, 80)" />
              </svg>
        </div>
    </div>
    <div id="section10" class="Container">
        <div class="row h-100 align-items-center justify-content-center">
            <svg id="svg-peoples" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1042.7 847.57"><defs><style>.cls-1{fill:#0f3480;opacity:0.39;}</style></defs><g id="圖層_2" data-name="圖層 2"><g id="圖層_1-2" data-name="圖層 1"><path class="cls-1" d="M821.65,432.87c-3.79-11.91-3.16-22.33,1.32-32.61s6.63-9.82,15.1-25.29,7.84-23.28,9.92-30.75-6.29-9.66,17.39-30.14c4-3.44,7.46-6.67,10.58-9.68,1.53,1.51,3.55,3.45,4.56,4.47,1.46,1.48.21,2.61,2.52,4.17s1.45-4.94,0-6.37,1-7.29,1-7.29,1.21,6.23,3.19,7.57,1.73,2.65,4,5.15,5.52-5.14,1.62-5.31-3-6.47-4.69-10.56,4.31-2,6.93,7.24,9.79,4,6.93,3.6c-2.15-.33,0,0-3.17-2.59-1.82-1.48-3.42-10.88-4.46-18.67,4.56-4.31,8.54-7.11,13.43-8.18,12.14-2.65,31-13.07,34.67-21.43s3.51-18.33,8.79-30.53,9.21-25.32,14.56-29.6,33.81-28.91,43.42-46.07,9-23.51,7.45-34.39-5.92-13.85-6.92-17.48.06-8.84.06-8.84,31-.72,32.89-47.27-54.51-53.55-74-25.35S955,67.56,975.47,82.41c0,0,4.73,6.14-9.59,14.22s-26.37,15.7-30.74,26.55-13.73,15.36-13.5,19,1.23,5.76-5.62,15.92-19.55,31.14-25.37,39-1.58,17.66-10.11,23.73-33.17,15.55-49.12,31.88S799,282.54,796.67,287.4s-.34,19.48-1.07,27.86,12.84,31.34,6,58.25S775,423.08,759,420.61s-30.42-8.22-36.09-8.59-6.6,1-2.65,5.39,10.73,8.93,10.49,10.74,3,3.53,8.12,5.48-.92,2.83.09,5,.19,5.55,5.28,7.5,4.75.26,9,2.66,8,.5,11.65,2.45,51.66-.6,53.6-2.75S825.43,444.79,821.65,432.87Z"/><path class="cls-1" d="M14.85,372.6c7.56-3,14.35-3.12,21.25-.71s6.69,3.83,17.15,8.58,15.5,4,20.45,5,6-4.55,20.42,9.84c2.43,2.42,4.69,4.52,6.8,6.4-.91,1.07-2.07,2.48-2.68,3.18-.89,1-1.69.26-2.59,1.84s3.28.7,4.14-.34,4.78.28,4.78.28-4,1.09-4.76,2.44-1.64,1.26-3.16,2.84,3.61,3.33,3.53.79,4.06-2.27,6.63-3.56,1.52,2.71-4.37,4.86-2.15,6.55-2,4.67c.11-1.41,0,0,1.53-2.18.88-1.25,6.9-2.75,11.91-3.8,3,2.75,5,5.2,6,8.33,2.31,7.75,10,19.5,15.6,21.48s12.07,1.39,20.25,4.24,16.89,4.75,19.93,8,20.41,20.56,32,26,15.7,4.69,22.7,3.18,8.71-4.52,11-5.34a15.25,15.25,0,0,1,5.74-.39s2,20.12,32.29,19.08,32.15-38,12.89-49.32-33.72-6.41-42.37,7.64c0,0-3.76,3.36-9.69-5.55s-11.48-16.37-18.73-18.68-10.65-8.18-13-7.86-3.68,1.09-10.61-2.88S176.73,409.43,171.32,406s-11.55-.17-15.9-5.42-11.71-20.79-23.08-30.36-20.94-19.64-24.21-20.9-12.67.72-18.15.66-19.73,9.85-37.54,6.71S19,341.86,19.79,331.3s3.87-20.16,3.83-23.85-1-4.24-3.62-1.46-5.29,7.39-6.47,7.33-2.15,2.14-3.17,5.54-1.88-.47-3.24.29-3.59.4-4.62,3.79.07,3.11-1.29,6,.07,5.24-1,7.68,2.88,33.53,4.37,34.68S7.29,375.63,14.85,372.6Z"/><path class="cls-1" d="M519.44,608.06a23.37,23.37,0,0,1,1.47,17.21c-1.67,5.7-2.83,5.6-6.26,14.28s-2.57,12.75-3.17,16.81,3.94,4.66-7.14,17c-1.86,2.07-3.48,4-4.91,5.78-.91-.69-2.1-1.57-2.7-2-.86-.68-.28-1.36-1.6-2s-.43,2.69.45,3.35,0,3.89,0,3.89-1.05-3.19-2.18-3.76-1.08-1.28-2.43-2.45-2.56,3.07-.5,2.9,2,3.2,3.17,5.24-2.14,1.34-4.13-3.35-5.4-1.47-3.87-1.43c1.15,0,0,0,1.84,1.15,1.05.66,2.51,5.49,3.57,9.51-2.11,2.56-4,4.3-6.51,5.18-6.2,2.2-15.41,8.92-16.79,13.56s-.63,9.85-2.59,16.61S462,739.36,459.44,742,443.6,759.38,439.69,769s-3.16,12.94-1.64,18.55,4,6.88,4.79,8.72a12.28,12.28,0,0,1,.56,4.65s-16.25,2.43-14.15,27,32.17,24.51,40.56,8.41,3.81-27.63-7.95-34.07c0,0-2.89-2.91,4.1-8.1s12.81-10,14.38-16,6.2-9,5.84-10.85-1-3,1.89-8.74,8.21-17.65,10.74-22.18-.34-9.38,3.74-13.13,16.39-10.36,23.69-20,15.07-17.82,16-20.52-1.11-10.25-1.28-14.7-8.82-15.61-7-30.2,10.67-27.79,19.27-27.55,16.52,2.3,19.52,2.12,3.4-1,1-3-6.22-4-6.21-5-1.83-1.65-4.63-2.34.3-1.55-.38-2.62-.47-2.9-3.27-3.59-2.51.18-4.92-.8-4.26.27-6.28-.51-27.09,3.74-28,5S516.67,602.05,519.44,608.06Z"/></g></g></svg>
            <div class="col-sm-9 col-12">
                <h4 id="text-10" class="text">『奈特人生』的由來<br>
                    『奈特』，意旨『internet/net』。<br>
                    在國家政策的推動下，網路普及率逐年攀高，促使台灣趨向數位化社會發展。網路在日常生活中處處可見，我們一生幾乎脫離不了網路。如何在現實與虛擬之間取得平和，是你我都需要要重視的問題。
                </h4>
            </div>
        </div>
    </div>
    <div id="section11" class="Container">
        <div class="row h-100">
            <div class="col-sm-12 col-12">
                <div id="title-9" class="title-bg h-2">
                    <h2 class="title">組員介紹</h2>
                </div>
                <div class="row">
                    <div class="col-4">
                        <img class="introductionImg" src="/img/KY.svg" alt="">
                        <h3 class="introductionName">王功彥</h3>
                        <h3 class="introductionContent">視覺設計</h3>
                    </div>
                    <div class="col-4">
                        <img class="introductionImg" src="/img/YL.svg" alt="">
                        <h3 class="introductionName">林佑蓉</h3>
                        <h3 class="introductionContent">企劃撰寫</h3>
                    </div>
                    <div class="col-4">
                        <img class="introductionImg" src="/img/SY.svg" alt="">
                        <h3 class="introductionName">方脩硯</h3>
                        <h3 class="introductionContent">網頁開發</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
