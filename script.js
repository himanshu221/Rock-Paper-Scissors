// Get DOM elements
const container = document.querySelector('.container')
const optionImages = document.querySelectorAll(".option_image")
const userImage = document.querySelector(".user_image img")
const cpuImage = document.querySelector(".computer_image img")
const result = document.querySelector(".result p")
const scoreContainer = document.querySelector(".score_container")

optionImages.forEach((img,index) => {
    img.addEventListener('click', e => {
        const target_image = e.currentTarget
        target_image.classList.add('active')

        // Remove 'active' class from element which is not selected
        optionImages.forEach((imgRem,indexRem) => {
            indexRem !== index && imgRem.classList.remove('active')
        })
        container.classList.add('start')
        result.textContent = "Wait ..."
        userImage.src = "images/rock.png"
        cpuImage.src = "images/rock.png"
        
        setTimeout(() => {
            container.classList.remove('start')
            // get src of user image
            const imgLoc = target_image.querySelector('img').getAttribute('src')
        
            // set user image to selected option image
            userImage.src = imgLoc

            const randomNumber = Math.floor(Math.random() * 3)

            const cpuOptions = ["images/rock.png", "images/paper.png", "images/scissors.png"]

            cpuImage.src = cpuOptions[randomNumber]

            const outcomes = {
                "RR": "It's a Draw !! Hang in there",
                "RP": "Damn itt !! You lost",
                "RS": "Tempu !! You won",
                "PR": "Tempu !! You won",
                "PP": "It's a Draw !! Hang in there",
                "PS": "Damn itt !! You lost",
                "SR": "Damn itt !! You lost",
                "SP": "Tempu !! You won",
                "SS": "It's a Draw !! Hang in there"
            }

            const whoWon = {
                "RR": "",
                "RP": "cpu_score",
                "RS": "user_score",
                "PR": "user_score",
                "PP": "",
                "PS": "cpu_score",
                "SR": "cpu_score",
                "SP": "user_score",
                "SS": ""
            }

            const userValue = ["R","P","S"][index]
            const cpuValue = ["R","P","S"][randomNumber]

            result.textContent = outcomes[userValue + cpuValue]
            const winner = whoWon[userValue + cpuValue]

            winner.length === 0 || scoreContainer.querySelector(`.${winner}`).textContent++

        },2100)
       
    })
})