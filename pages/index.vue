<template>
  <div>
    <div class="space-y-12">
      <HomeMainBanner />
      <section>
        <div class="px-4 mb-6 text-center">
          <h3 class="text-xl font-semibold sm:text-2xl tracking-widest">
            The Dunman Residences
          </h3>
          <p>
            Latest Unit Sold: TBA |
            <NuxtLink
              to="/balance-units-chart"
              class="font-medium hover:underline text-theme-600"
              >See the Balance Units Chart</NuxtLink
            >
          </p>
        </div>
        <div class="py-6 bg-theme-50">
          <div class="text-center">
            <h4 class="text-xl font-medium">Latest Updates</h4>
           <b> <p class="text-gray-600">Last updated: {{currentDate()}} </p> </b>
          </div>
          <div class="max-w-6xl px-4 mx-auto prose text-gray-800">
            <div class="max-w-2xl px-4 mx-auto">
              <ul>
                <li>
                  <strong>01-03-2022:</strong>
                  <NuxtLink to="/book-an-appointment" class="!text-theme-600"
                    >Book an Appointment</NuxtLink
                  >
                  to view The Dunman Residences and get Direct VVIP Preview
                   Price + Discounts.
                </li>
                <li>
                  <strong>01-03-2022:</strong> Check our latest
                  <NuxtLink to="/balance-units-chart" class="!text-theme-600">
                    The Dunman Residences
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>22-01-2022:</strong> Check our latest
                  <NuxtLink to="/pricing" class="!text-theme-600">
                    The Dunman Residences
                  </NuxtLink>
                  here
                </li>
                <li>
                  <strong>20-01-2022:</strong>The latest  
                  <NuxtLink to="/floor-plan" class="!text-theme-600"
                    >The Dunman Residences Floor Plan</NuxtLink
                  > is now available.
                </li>
                <li>
                  <strong>20-10-2021:</strong> Check your loan eligibility by
                  calculating at
                  <NuxtLink
                    to="/financing/maximum-loan-eligibility-calculator-tdsr"
                    class="!text-theme-600"
                    >Max Loan Eligibility Calculator (TDSR)</NuxtLink
                  >
                  on this website.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl px-4 mx-auto">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div
              class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              "
            >
              <img
                src="~/assets/img/home/singhaiyi-logo.jpg"
                alt="The Dunman Residences"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Dunman Residences</p>
              <div class="space-y-4">
                <p>
                  <NuxtLink
                    to="/developer"
                    class="transition text-theme-600 hover:text-theme-700"
                    >SingHaiYi Group Pte. Ltd.</NuxtLink> is a fast-growing, diversified real estate company listed on the Mainboard of the Singapore Exchange (SGX).
                  Over the years, SingHaiyi has built a solid track record in property development in Singapore, with residential properties rated "CONQUAS STAR" by the building 
                  and Construction Authority. 
                </p>
                  <p>
                  <NuxtLink
                    to="/developer"
                    class="transition text-theme-600 hover:text-theme-700"
                    >SingHaiYi Group Pte. Ltd.</NuxtLink> is well-established in Singapore, but it has also expanded its portfolio to include 
                  the United States, Australia, and Malaysia.

                </p>
                <p>
                  Our current project at 9 Penang Road, formerly Park Mall, is a new Grade A commercial structure with 10 floors and two wings. At SingHaiyi, they are driven by their goal of establishing a sustainable business and a trustworthy brand that is prime for enduring growth capable of lasting generations.
                </p>
              </div>
            </div>
            <div
              class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              "
            >
              <img
                src="~/assets/img/home/map-location-thedunman.png"
                alt="The Dunman Residences"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Dunman Residences Location</p>
              <div class="space-y-4">
                <p>
                  The Dakota MRT Station, connected to the Circle Lines subway network, is about 1 minute away from the Dunman Residences. 
                  The list of nearby amenities can be found 
                  here at <NuxtLink
                    to="/location-map"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Dunman Residences Location Map</NuxtLink>.
                </p>
                <p>
                  Gardens by the Bay is only four stations distant from the city center of Singapore. The Dunman Residence is located in the heart of Singapore, 
                  with easy access to the Pan Island Expressway (PIE), East Coast Parkway (ECP), and Kallang Paya Lebar Expressway (KPE) for private vehicles.
                </p>
                <p>
                  It is also close to several primary and secondary schools, including Broadwick, Kong Hwa, Choon Cheng, and others. 
                  This strategic location is easily accessible and handy for all of your requirements. The Dunman Residences location is ideal for a staycation.
                </p>
              </div>
            </div>
            <div
              class="
                max-w-sm
                p-6
                mx-auto
                space-y-2
                text-center
                bg-white
                rounded-md
                shadow-md
              "
            >
              <img
                src="~/assets/img/home/direct.png"
                alt="The Dunman Residences Showflat"
                class="mx-auto rounded"
              />
              <p class="text-lg font-semibold">The Dunman Residences Showflat</p>
              <div class="space-y-4">
                <p>
                  Secure your
                  <NuxtLink
                    to="/book-an-appointment"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Dunman Residences Showflat appointment here</NuxtLink
                  >, register via our official site. Or contact us at +65 6100
                  3337 before making your way down the showflat. Showflat will
                  be closed on certain days due to routine maintenance work or
                  developer hosting own private events which is close to public.
                  Therefore, interested buyers are advice to obtain
                  an appointment online before proceeding.
                </p>
                <p>
                  Due to COVID19, there will be LIMITED time slot per day,
                  please reserve an appointment online before making your way
                  down to The Dunman Residences ShowFlat.
                </p>
                <p>
                  All registrants who have
                  <NuxtLink
                    to="/book-an-appointment"
                    class="transition text-theme-600 hover:text-theme-700"
                    >registered an appointment here</NuxtLink
                  >
                  will receive Best Developer Pricing and COMMISION are
                  NON-payable. Please be advise that units for sale at The Dunman Residences
                  are on first come first serve basis. Reservations of unit
                  is only up to 2 hours and subjected to management’s
                  authorization.
                </p>
                <p>
                  Any price changes will be subjected to changes without any
                  prior notice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="py-12 bg-brown-700">
          <div class="max-w-6xl px-4 mx-auto">
            <div
              class="
                flex flex-wrap
                items-center
                justify-between
                p-6
                border
                rounded-md
                sm:col-span-2
                border-brown-400
              "
            >
              <h1 class="text-3xl font-bold text-white">
                Book An Appointment To Get Direct VVIP Preview
              </h1>
              <NuxtLink
                to="/book-an-appointment"
                class="
                  inline-block
                  font-medium
                  text-white
                  transition
                  rounded
                  bg-brown-900
                  hover:bg-yellow-900
                  px-6
                  py-3
                "
                >Book an Appointment</NuxtLink
              >
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-6xl px-4 mx-auto prose text-justify">
          <div>
            <h3 class="text-xl font-semibold sm:text-2xl text-center">
              The Dunman Residences
            </h3>
            <p>
              <NuxtLink
                  to="/"
                  aria-current="page"
                  class="transition text-theme-600 hover:text-theme-700"
                  >Dunman Residences</NuxtLink> brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. 
                   The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, 
                  affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, 
                  and first-rate care facilities.
            </p>
            <p>
              Future residents will have immediate access to the Geylang Park Connector, which runs along the Geylang River and connects easily to the Marina Reservoir and 
              Gardens by the Bay. We discover self-renewal, the simple pleasures of spending time with family and friends, and the appreciation of a setting that enables us 
              to be who we truly are. Enjoy a fresh way of life.
            </p>
                        <p>
              Home is where your story begins. Where you choose to live is equally as crucial as your lifestyle when you live there. Architecture in creating a home that stands the test of time 
              and draws inspiration from the gardens outside to create a life that’s well-lived inside.
              A home is more than just a roof over your head, and it holds a lifetime of memories. Growth and wellness are integrated to create an energized, holistic environment for you and your loved ones. 
              There is no better investment than in your family or yourself and no better place to put down your roots.
            </p>
                        <p>
              Aspiring homeowners may now view and download <NuxtLink
                    to="/floor-plan"
                    class="transition text-theme-600 hover:text-theme-700"
                    >The Dunman Residences Floor Plan</NuxtLink>.
            </p>
                 
          </div>
         <!-- <div class="grid grid-cols-2 gap-2 lg:gap-6 lg:grid-cols-4">
            <img
              src="~assets/img/home/home-artist-impression-thumb-1.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-2.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-3.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
            <img
              src="~assets/img/home/home-artist-impression-thumb-4.jpg"
              alt=""
              class="object-cover w-full h-auto rounded"
            />
          </div> -->
        </div>
      </section>
      <BookAppointment />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title:process.env.TITLE,
    meta: [
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Dunman Residences brings to life a home amidst nature that offers seclusion, peace, and a lavish expanse in which to unwind in rich splendour. The land lot offers quick access to the city centre and other areas of Singapore as Dakota MRT Station on the Circle Line is less than 100m away. This brand-new, affluent facility in District 15 of Singapore will include plenty of green space in addition to opulent amenities, design-forward buildings, heart-stopping views, and first-rate care facilities. The Dunman Road New Condo is close to the Datoka Circle Line Station (CC8) and is situated near Dunman Road in District 15 of Singapore. When fully developed, the new condo on Dunman Road will have 1,002 residential units available.'
        },
      {
        hid: 'keywords', 
        name: 'keywords', 
        content: 'dunman residences, dunman, residences,dunman new launch, launch, new, latest dunman residences'
        }
    ],
  },
  methods: {
    currentDate() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const current = new Date();
  const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;
  return date;
}
  },
};

</script>
