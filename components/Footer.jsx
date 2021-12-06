import React from 'react'

function Footer() {
    return (
        <section className="bg-gray-100"> 
        <div className="grid md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Support</h5>
                <p>Help Centre</p>
                <p>Safety information</p>
                <p>Cancellation options</p>
                <p>Our COVID-19 Response</p>
                <p>Supporting people with disabilities</p>
                <p>Report a neighbourhood concern</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Community</h5>
                <p>Airbnb.org: disaster relief housing</p>
                <p>Support Afghan refugees</p>
                <p>Celebrating diversity & belonging</p>
                <p>Combating discrimination</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Hosting</h5>
                <p>Try hosting</p>
                <p>AirCover: protection for Hosts</p>
                <p>Explore hosting resources</p>
                <p>Visit our community forum</p>
                <p>How to host responsibly</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>Newsroom</p>
                <p>Learn about new features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Airbnb Luxe</p>
            </div>
        </div>
            <hr className="m-2" />
            <p className="text-center p-2 text-gray-800 text-sm">@2021 Airbnb, Inc . Privacy . Terms . Sitemap . Company Details</p>
        </section>
    )
}

export default Footer
