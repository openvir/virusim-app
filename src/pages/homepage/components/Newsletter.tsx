import React, { Component } from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

const url =
  'https://virusim.us8.list-manage.com/subscribe/post?u=aaf871f49da627217326f2630&amp;id=606669db37'

class Newsletter extends Component {
  state = {
    email: '',
    errorMessage: '',
  }

  updateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ email: e.currentTarget.value })
    this.setState({ errorMessage: '' })
  }

  validate() {
    if (this.state.email == '') {
      this.setState({ errorMessage: 'Please enter a email' })
      return false
    }
    var regex = new RegExp(/\S+@\S+/)
    if (!regex.test(this.state.email)) {
      this.setState({ errorMessage: 'Please enter a valid email' })
      return false
    }
    this.setState({ errorMessage: '' })
    return true
  }

  submit(hooks: any) {
    if (this.validate()) {
      hooks.subscribe({ EMAIL: this.state.email })
      document.getElementById('newsletter_form')?.classList.add('hide')
    } else {
      //console.log('form error')
    }
  }

  render() {
    return (
      <div id="mailchimpSection" className="section">
        <h3>Subscribe to our newsletter</h3>
        <p>Receive updates about ViruSim and research about SARS-CoV-2.</p>

        <MailchimpSubscribe
          render={(hooks) => (
            <div className="mailchimpForm">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  this.submit(hooks)
                }}
                noValidate
                id="newsletter_form"
              >
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.updateEmail}
                  />
                  <p className="error-message">{this.state.errorMessage}</p>
                </div>

                <button type="submit">Subscribe</button>
              </form>
              <div>
                {hooks.status === 'error' && <span>hooks.message</span>}
                {hooks.status === 'sending' && <span>Subscribing!</span>}
                {hooks.status === 'success' && <span>{hooks.message}</span>}
              </div>
            </div>
          )}
          url={url}
        />
      </div>
    )
  }
}

export default Newsletter
