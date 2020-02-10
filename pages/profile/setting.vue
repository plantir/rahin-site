<template>
  <section>
    <v-layout row wrap>
      <v-flex xs2></v-flex>
      <v-flex xs8>
        <v-form-generator v-model="model" :formData="formData"></v-form-generator>
        <div>
          <v-btn color="info" @click="save">ذخیره</v-btn>
        </div>
      </v-flex>
      <v-flex xs2></v-flex>
    </v-layout>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator/types'
export default Vue.extend({
  data() {
    let formData: VRFormData = [
      {
        title: 'اطلاعات ورود به پنل',
        rows: [
          {
            label: 'شماره موبایل',
            type: 'textField',
            validation: { required: true },
            disabled: true,
            browserAutocomplete: 'new-password',
            placeholder: 'شماره موبایل را وارد نمایید',
            model: 'username'
          }
        ]
      },
      {
        title: 'اطلاعات عمومی:',
        rows: [
          {
            label: 'نام',
            validation: { required: true },
            type: 'textField',
            placeholder: 'نام را به فارسی وارد نمایید',
            model: 'name'
          },
          {
            label: 'نام خانوادگی',
            validation: { required: true },
            type: 'textField',
            placeholder: 'نام خانوادگی را به فارسی وارد نمایید',
            model: 'family'
          },
          {
            label: 'ایمیل',
            type: 'textField',
            validation: { email: true },
            placeholder: 'ایمیل را وارد نمایید',
            model: 'email'
          },
          {
            label: 'شماره ثابت',
            type: 'textField',
            placeholder: 'شماره ثابت را وارد نمایید',
            model: 'phone'
          },
          {
            label: 'تاریخ تولد',
            type: 'datePicker',
            appendIcon: 'event',
            placeholder: 'تاریخ تولد را وارد نمایید',
            model: 'birthday'
          },

          {
            label: 'جنسیت',
            type: 'radio',
            items: [
              { text: 'پسر', value: 'male' },
              { text: 'دختر', value: 'famale', color: 'pink' }
            ],
            placeholder: 'جنسیت را وارد نمایید',
            model: 'gender'
          },
          {
            label: 'گروه خونی',
            type: 'select',
            items: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            placeholder: 'گروه خونی را وارد نمایید',
            model: 'blood_type'
          }
        ]
      }
    ]
    return {
      formData,
      model: {}
    }
  }
})
</script>