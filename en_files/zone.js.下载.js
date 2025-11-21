import { config } from "../../config.js"
import { language } from "../../language.js"


new Vue({
    el: '#app',
    data: {
        ...config,
        languageKey: localStorage.getItem('language') || 'English',
        visible: false
    },
    computed: {
        i18n ({ languageKey }) {
            return language[languageKey]
        }
    },
    methods: {
        clickLanguage (event) {
            const language = event.target.textContent.trim()
            localStorage.setItem('language', language)
            this.languageKey = language
            this.appendLanguage()
        },
        appendLanguage () {
            const elements = document.querySelectorAll('.i18n-list')
            elements.forEach(element => {
                element.innerHTML = ''
                Object.keys(language).forEach(language => {
                    element.innerHTML +=
                        `<div class="i18n-list__item ${language === this.languageKey && 'is-current'}">
                            <img src="assets/images/${language}.svg">
                            <span>${language}</span>
                        </div>`
                })
            })
        },
        download () {
            // 检测是苹果还是安卓
            var u = window.navigator.userAgent
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 || u.indexOf('Windows') > -1
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
            // 安卓
            if (isAndroid) {
                window.location.href = config.android
            }

            // 苹果
            if (isiOS) {
                window.location.href = config.ios
            }
        },
        clickTop () {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // 可选，添加平滑滚动效果
            })
        },
        initSwiper () {
            new Swiper('.zone-swiper', {
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-pagination-bullet',
                    prevEl: '.swiper-pagination-bullet',
                },

                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    snapOnRelease: false,
                },
            })
        },
        //获取国家
        async getCountry () {
            fetch('https://ipapi.co/json/')
                .then(response => response.json())
                .then(data => {
                    if (data.country === 'CN') {
                        this.languageKey = 'Chinese'
                    } else if (data.country === 'FR') {
                        this.languageKey = 'French'
                    } else if (data.country === 'DE') {
                        this.languageKey = 'German'
                    } else if (data.country === 'IT') {
                        this.languageKey = 'Italian'
                    } else if (data.country === 'ES') {
                        this.languageKey = 'Spanish'
                    } else if (data.country === 'KR') {
                        this.languageKey = 'Korean'
                    } else if (data.country === 'JP') {
                        this.languageKey = 'Japanese'
                    } else if (data.country === 'MAS') {
                        this.languageKey = 'Malay'
                    } else if (data.country === 'THA' || data.country === 'TH') {
                        this.languageKey = 'Thai'
                    } else {
                        this.languageKey = 'English'
                    }
                    this.appendLanguage()
                })
                .catch(error => {
                    console.error('Error fetching location data:', error)
                })

        }
    },
    mounted () {
        this.getCountry()

        this.initSwiper()

    }
})
