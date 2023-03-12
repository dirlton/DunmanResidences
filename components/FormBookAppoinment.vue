<template>
  <section class="space-y-6">
    <form class="space-y-4" @submit.prevent="send">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            for="send_brochure"
            class="
              inline-flex
              items-center
              w-full
              p-4
              font-medium
              text-gray-600
              border
              rounded-lg
              border-theme-100
              bg-theme-50
            "
            ><input
              id="send_brochure"
              v-model="send_brochure"
              type="checkbox"
              class="
                border-gray-300
                rounded
                shadow-sm
                text-theme-600
                focus:border-theme-300
                focus:ring
                focus:ring-theme-200
                focus:ring-opacity-50
              "
            />
            <span class="ml-2"
              >Send me E-Brochure, Floor Plan &amp; Pricing now</span
            ></label
          >
          <!---->
        </div>
        <div>
          <label for="enquiry" class="block font-medium text-gray-500"
            >Enquiry<span class="text-red-500">*</span></label
          >
          <select
            id="enquiry"
            v-model="enquiry"
            required="required"
            class="form-input"
          >
            <option>Financing</option>
            <option>Purchase</option>
            <option>View Showflat</option>
            <option>I want to purchase, but I have an existing property to sell</option>
            <option>Decoupling</option>
            <option>CPF Fund Usage</option>
            <option>Loan Eligibility (LTV)</option>
            <option>Total Debt Servicing Ratio (TDSR)</option>
            <option>Additional Buyer Stamp Duty (ABSD)</option>
            <option>I want updates only</option>
            <option>Others</option>
          </select>
          <!---->
        </div>
        <div>
          <label for="name" class="block font-medium text-gray-500"
            >Name<span class="text-red-500">*</span></label
          >
          <input
            id="name"
            v-model="name"
            type="text"
            required="required"
            class="form-input"
          />
          <!---->
        </div>
        <div>
          <label for="mobile" class="block font-medium text-gray-500"
            >Mobile<span class="text-red-500">*</span></label
          >
          <input
            id="mobile"
            v-model="mobile"
            type="number"
            required="required"
            class="lowercase form-input"
          />
          <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
            <div v-for="(error, index) in arrayError" :key="index">
              <p v-if="index === 'mobile'" class="mt-2 text-sm text-red-500">
                {{ error }}
              </p>
            </div>
          </div>

          <!---->
        </div>
        <div>
          <label for="email" class="block font-medium text-gray-500"
            >Email<span class="text-red-500">*</span></label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            required="required"
            class="form-input"
          />
          <!---->
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block font-medium text-gray-500"
            >Message</label
          >
          <textarea v-model="message" class="form-input"></textarea>
          <!---->
        </div>
        <div class="sm:col-span-2">
          <label for="make_appt" class="block font-medium text-gray-500"
            >Make an Appointment?<span class="text-red-500">*</span></label
          >
          <div class="space-y-2">
            <label class="flex items-center"
              ><input
                v-model="isAppointment"
                type="radio"
                value="Would like to make an appointment."
                class="mr-2"
              />
              I have some questions and I would like to make an appointment to
              discuss in details.
            </label>
            <label class="flex items-center"
              ><input
                v-model="isAppointment"
                type="radio"
                value="No appointment required."
                class="mr-2"
              />
              No appointment required for now.
            </label>
            <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
              <div v-for="(error, index) in arrayError" :key="index">
                <p
                  v-if="index === 'isAppointment'"
                  class="mt-2 text-sm text-red-500"
                >
                  {{ error }}
                </p>
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block font-medium text-gray-500"
            >Acceptance of Privacy Policy<span class="text-red-500"
              >*</span
            ></label
          >
          <label class="inline-flex items-center"
            ><input
              v-model="policyIsAgree"
              type="checkbox"
              value="1"
              required="required"
              class="
                border-gray-300
                rounded
                shadow-sm
                text-theme-600
                focus:border-theme-300
                focus:ring
                focus:ring-theme-200
                focus:ring-opacity-50
              "
            />
            <span class="ml-2"
              >I have read and agree to the
              <NuxtLink
                to="/privacy-policy"
                class="font-medium underline text-theme-600"
                >Privacy Policy</NuxtLink
              ></span
            ></label
          >
          <!---->
        </div>
      </div>
      <button
        class="
          inline-flex
          items-center
          px-4
          py-2
          text-xs
          font-medium
          tracking-widest
          text-white
          uppercase
          transition
          bg-gray-800
          border border-transparent
          rounded-md
          hover:bg-gray-700
          active:bg-gray-900
          focus:outline-none focus:border-gray-900 focus:shadow-outline-gray
          disabled:opacity-25
        "
      >
        Submit
      </button>
      <button
        class="
          inline-flex
          items-center
          px-4
          py-2
          text-xs
          font-medium
          tracking-widest
          uppercase
          transition
          border border-transparent border-gray-800
          rounded-md
          hover:border-theme-700 hover:text-theme-700
          focus:outline-none focus:shadow-outline-gray
          disabled:opacity-25
        "
        @click.prevent="reset"
      >
        Reset
      </button>
    </form>

    <div>
      <div
        v-if="errors.length"
        class="flex items-center p-4 border rounded-lg bg-red-100"
      >
        <!---->
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-8 h-8 mr-2 text-red-500"
        >
          <path
            d="M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"
          ></path>
        </svg>
        <div class="select-none">
          The given data was invalid. Please input valid information. Thank you.
          <div v-for="(arrayError, arrayIndex) in errors" :key="arrayIndex">
            <div v-for="(error, index) in arrayError" :key="index">
              <p>{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- success !-->
      <div
        v-else-if="success"
        class="flex items-center p-4 border rounded-lg bg-green-100"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-8 h-8 mr-2 text-green-500"
        >
          <path
            d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
          ></path>
          <path
            d="M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"
          ></path>
        </svg>
        <!---->
        <div class="select-none">
          Thank you for your enquiry, we will respond to your request as soon as possible. Thank you!
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    enquiry: '',
    name: '',
    mobile: '',
    email: '',
    message: '',
    isAppointment: '',
    errors: '',
    success: false,
    policyIsAgree: '',
    send_brochure: '',
    email_2:'dave@singhaiyi.com',
    new:'',
  }),
  methods: {
    send() {
      this.errors = []

    /*  if (this.mobile) {
        const prefix = this.mobile.substring(0, 2)
        if (prefix !== '65' || this.mobile.length <= 7) {
          this.errors.push({
            mobile: 'The mobile field contains an invalid number.',
          })
        }
      }  */

      if (!this.isAppointment) {
        this.errors.push({ isAppointment: 'The make appt field is required.' })
      }

      if(this.send_brochure!== false){
        this.new= 'Yes'
        if(this.send_brochure!== true){
          this.new= 'No'
        }
      }

      if (!this.errors.length) {
        // eslint-disable-next-line
       this.$axios
        .post('https://grand-dunman.com.sg/send_mail.php', {
          To: process.env.EMAIL_USER,
          From: this.email,
           Subject: 'Dunman Residences - Receipt Acknowledgement',
          Body:
            '<h3>Dear ' + this.name + '<h3>' + 
            '<h4>Thank you for your interest in Dunman Residences. We are thrilled to offer you the opportunity to be among the first to experience our new, upcoming condominium.</h4>' + 
            '<h4>As a valued prospect, we want to keep you informed of all the latest updates and developments related to Dunman Residences. Our team is dedicated to providing you with the most up-to-date information available, and we will be sure to keep you in the loop as we progress.</h4>'+ 
            '<h4>In the meantime, we invite you to visit our show flat and take advantage of our exclusive direct developer prices with discounts. Our knowledgeable staff will be on hand to guide you through our state-of-the-art facilities and answer any questions you may have.</h4>'+ 
            '<h4>In addition to our show flat, we also update our website regularly with new information and exciting developments related to Dunman Residences. Be sure to check back often for the latest news at: <a href="https://grand-dunman.com.sg/"> <b>grand-dunman.com.sg</b></a></h4>' +  
            '<h4>If you have any questions or concerns, please do not hesitate to contact us at <a href="tel:+65 6100 3337"><b>+65 6100 3337</b></a> or reply to this email: <a href="mailto:dave@singhaiyi.com"><b>dave@singhaiyi.com</b></a>. Our team is here to provide you with the highest level of service and support.</h4>'+
            '<h4>Thank you for considering Dunman Residences as your next home. We look forward to the opportunity to serve you!</h4>' + 
            '<h4>Best regards,</h4>' + 
            '<h4>Dunman Residences</h4>',
        }).then(() => {
        this.$axios
        .post('https://grand-dunman.com.sg/send_mail.php', {
          To: process.env.EMAIL_USER,
          From: this.email_2,
         Subject: 'Dunman Residences - New Appointment Submission' +' [' + this.name +']',
          Body:
            '<h3>Dear Dave, </h3>' +
            '<h4>We have received a new appointment submission from a potential buyer who wishes to visit the property. The details of the appointment are as follows: </h4>' + 
            '<ul>'+
            '<li> <strong> Enquiry: ' + this.enquiry + '</strong></li>' +
            '<li> <strong> Name: ' + this.name + '</strong></li>' +
            '<li> <strong> Mobile: ' + this.mobile + '</strong></li>' +
            '<li> <strong> Email: ' + this.email + '</strong></li>' +
            '<li> <strong> Message: ' + this.message + '</strong></li>' +
            '<li> <strong>Appointment: ' + this.isAppointment + '</strong></li>' +
            '<li> <strong>Send Brochure: ' + this.new + '</strong></li>' +
            '</ul>'+
            '<h4>Thanks,</h4>' + 
            '<h4>Dunman Residences</h4>',
        })
         
          this.success = true
          this.reset()
        }).catch( () => {
          
        })
      }
    },
    reset() {
      this.enquiry = ''
      this.name = ''
      this.mobile = ''
      this.email = ''
      this.message = ''
      this.isAppointment = ''
      this.errors = ''
      this.policyIsAgree = ''
      this.send_brochure = ''
    },
  },
}
</script>

<style></style>
