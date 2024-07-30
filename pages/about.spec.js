import { describe, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import about from './about.vue'

describe('Test the about page', ()=> {
    test('Test the import', () => {
        const wrapper = mount(about)
        expect(wrapper).toBeDefined()
    })

    test('Test the contents', ()=> {
        const wrapper = mount(about)
        expect(wrapper.find('h3').text()).toBe('About')
        expect(wrapper.find('p').text()).toBe('This page will be displayed at the /about route.')
        expect(wrapper.find('nuxtlink').text()).toBe('Home page')
        expect(wrapper.find('nuxtlink').attributes().to).toBe('/')

        // expect(wrapper.findComponent({ name: 'NuxtLink' }).props()).toBe('/')
        //console.log(wrapper.findComponent({ name: 'nux' }))
    })

})