// script.js
fetch('cards.json') // Corrected path to cards.json
    .then(response => response.json())
    .then(cards => {
        const dynamicContent = document.getElementById('dynamicContent');

        cards.forEach(card => {
            const cardHtml = `
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                    <a href="${card.link || '#'}">
                        <div class="card h-100">
                            <div class="imageBox card-image skeleton">
                                <div class="imageInn" style="border-radius: 6px;">
                                    <img data-src="${card.thumbnail}" alt="Thumbnail" style="opacity: 0; height: 0;">
                                </div>
                                <div class="hoverImg" style="border-radius: 6px;">
                                    <picture>
                                        <source srcset="${card.hoverWebp}" type="image/webp">
                                        <source srcset="${card.thumbnail}" type="image/jpg">
                                        <img src="${card.thumbnail}" alt="Hover Image">
                                    </picture>
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="card-title text-white skeleton">${card.title}w</h6>
                                <p class="card-description text-white-50 skeleton">${card.date}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            dynamicContent.innerHTML += cardHtml;

            const images = dynamicContent.querySelectorAll('img[data-src]');
            images.forEach(img => {
                img.src = img.dataset.src;
                img.onload = () => {
                    img.style.opacity = 1;
                    img.style.height = 'auto';
                    img.parentElement.classList.remove('skeleton');
                };
            });
        });
    })
    .catch(error => console.error('Error fetching cards:', error));