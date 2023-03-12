<template>
  <div>
    <div>
      <div class="py-12 select-none bg-theme-700">
        <div class="text-xl font-semibold text-center text-white sm:text-4xl">
          Project Details
        </div>
      </div>
      <section class="py-12">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="p-6 bg-white rounded-lg shadow-lg">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label class="block text-gray-500 font-bold">Project Name</label>
                <p>Dunman Residences (Dunman Road New Condo)</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Developer</label>
                <p>SingHaiyi Group Pte. Ltd.</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Location</label>
                <p>Dunman Road</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">District</label>
                <p>District 15</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Site Area</label>
                <p>Approx. 23,234.3 sq m / 271,622 sq ft</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Maximum Gross Floor Area</label>
                <p>88,321 m²</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Plot Ratio</label>
                <p>3.5</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Architect</label>
                <p>TBA</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Main Contractor</label>
                <p>TBA</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">M &amp; E Consultant</label>
                <p>TBA</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Landscape Consultant</label>
                <p>TBA</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Tenure</label>
                <p>99-Year Leasehold</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Site Use</label>
                <p>Residential Flat Developement</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Total No. of Units</label>
                <p>1,070 Residential Units (Estimated)</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Development</label>
                <p>1 Block of 20-Storey & 3 Blocks of 19-Storey Condominium</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Land Use</label>
                <p>Residential (Non-Landed)</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Expected Date of TOP</label>
                <p>2025</p>
              </div>
              <div>
                <label class="block text-gray-500 font-bold">Expected Date of Legal Completion</label>
                <p>TBA</p>
              </div>
              
            </div>
          </div>
          <div class="py-4 italic text-center text-gray-500">
            (Project details for Dunman Residences may be subjected to change without prior notice)
          </div>
          <section class="py-6">
            <NuxtLink
              to="/location-map"
              class="
                inline-flex
                items-center
                justify-center
                w-full
                px-3
                py-3
                text-white
                transition
                rounded
                sm:px-0
                hover:bg-theme-900
                bg-theme-700
              "
            >
              Continue To Location Map
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="w-5 h-5"
              >
                <path
                  d="M13 6l6 6-6 6M5 6l6 6-6 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path></svg
            ></NuxtLink>
          </section>
        </div>
      </section>
      <BookAppointment />
    </div>
  </div>
</template>
<script>
export default {}
</script>
