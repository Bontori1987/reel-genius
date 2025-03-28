fetch('images.json')
    .then(response => response.json())
    .then(images => {
        const dynamicContent = document.getElementById('dynamicContent');

        images.forEach(card => {
            const cardHtml = `
                <div class="col-lg-4 col-md-4 col-sm-12 mb-4">
                        <a href="${card.link}">
                            <div class="card h-100">
                                <div class="imageBox card-image skeleton">
                                    <div class="imageInn" style="border-radius: 6px;">
                                        <img data-src="${card.image}" alt="Thumbnail" style="opacity: 0; height: 0;">
                                    </div>
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
    .catch(error => console.error('Error fetching images:', error));
