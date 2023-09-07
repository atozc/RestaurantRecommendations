const apiKey = 'G0xQXPjbuKrEFJyWAuAx7p6ch2cSi3H02-SacQ5vtGD_Zjh1YTguuuyknHmZ1k6CI2AuVazz2ADlWF0RbOI3CbnvXQyAYD-DApRh2I3-TocCSDTyRufVDDCb8Sv6ZHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {Authorization: `Bearer ${apiKey}`}
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city, 
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        url: business.url
                    }
                })
            }
        })
    }
};

export default Yelp;