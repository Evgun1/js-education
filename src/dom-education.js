;(function () {
    const toggleBtn = document.getElementById('toggle-btn')
    const form = document.getElementById('form')

    if (!toggleBtn) return

    toggleBtn.addEventListener('click', function (event) {
        /**
         * Inline style method
         */
        // if (form.style.display === 'block') {
        //     form.style.display = 'none'
        //     event.currentTarget.innerText = 'Show Form'
        // } else {
        //     form.style.display = 'block'
        //     event.currentTarget.innerText = 'Hide Form'
        // }

        /**
         * css class toggle method
         */

        form.classList.toggle('block')

        if (form.classList.contains('block')) {
            // form.classList.remove('block')
            event.currentTarget.innerText = 'Show Form'
        } else {
            // form.classList.add('block')
            event.currentTarget.innerText = 'Hide Form'
        }
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const formData = new FormData(event.target)

        const output = Array.from(formData.entries()).map(function ([key, value]) {
            if (key === 'age'){
                const dateNow = new Date()
                const currentYear = dateNow.getFullYear()
                const yearOfBirth = currentYear - value
                return `User year of birth is ${yearOfBirth}`
            }
            return `User ${key} is ${value}.`
        })

        const outputString = output.join(' ')

        alert(outputString)
    })
}())

