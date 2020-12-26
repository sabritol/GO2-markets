<template>
  <div>
    <h1>A little about you</h1>
    
    <p> Please fill some of the basics details to get started.</p>
    <FormulateForm v-model="formValues" @submit="handleSubmit" @input="performValidation"
        ref="form" >

      <div class="names">
      <FormulateInput name="name" placeholder="First Name"  />
      <FormulateInput name="lastname" placeholder="Last Name"  />
      
      </div>   

          
      <!-- <div class="phone"> -->
      <FormulateInput
      v-model="VuePhoneNumberInput"
       type="number"
       validation="required" />
      <!-- </div>    -->

      
       <Vue-phone-number-input v-model="phone"
      :disabled-fetching-country="true" 
      :no-use-browser-locale="true"
      required
      placeholder="Enter Mobile Number"

      >
      </Vue-phone-number-input>
    

      <h3>Select your role</h3>
      <p> Choose a role that better defines you. </p>
      <div class="role">
      <FormulateInput
      v-model="value"
      type="radio"
      label="Buyer"
      style=""
      />

      <FormulateInput
      v-model="value"
      type="radio"
      label="Seller"
      />
      </div>  
          
      <FormulateInput type="submit" label="Submit" :disabled="hasErrors"/>
    </FormulateForm>
    <h3>Values:</h3>
    {{formValues}}
    {{VuePhoneNumberInput}}
  </div>
</template>

<script>
export default {
  data: () => ({
    formValues: {},
    VuePhoneNumberInput: {}
  }),

    // hasErrors: true
  methods: {
    handleSubmit() {
        console.log(this.formValues && this.VuePhoneNumberInput)}
  
      }
  }

    // async performValidation () {
    //   this.hasErrors = await this.$refs.form.hasValidationErrors()
    // }

  

</script>

<style scoped>
h1 {
margin: 3%;  
position: static;
width: 268px;
height: 42px;
left: 0px;
top: 0px;
font-style:normal;
font-weight: 600;
font-size: 36px;
line-height: 42px;
text-align:left;
letter-spacing: -0.06em;
color: #242424;
font-family: 'Work Sans', sans-serif;}

p {
position: static;
width: 264px;
height: 48px;
left: 0px;
top: 50px;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;
letter-spacing: -0.06em;
color: #242424;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 8px;
text-align:left;

}
.names {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: static;
  }
.role {
  display: grid;
  grid-template-columns: 1fr 1fr

}  

h3 {
position: static;
width: 138px;
height: 23px;
left: 0px;
top: 0px;
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
text-align:left;
letter-spacing: -0.06em;
color: #242424;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 8px;
}

</style>

