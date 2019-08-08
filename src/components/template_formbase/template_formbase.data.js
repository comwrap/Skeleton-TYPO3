module.exports = {
	section_grid_12: {
		column1: `
			<label class="label" for="sex">Sex</label>
			<select class="select" id="sex" name="sex">
				<option selected disabled>-</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
			</select>

			<label class="label" for="country">Country</label>
			<select class="select" id="country" name="country" disabled>
				<option value="germany">Germany</option>
				<option value="france">France</option>
			</select>

			<label class="label" for="givenname">Given name</label>
			<input class="input" id="givenname" name="givenname" type="text" autocorrect="off" autocomplete="given-name" placeholder="Timothy">

			<label class="label" for="additionalname">Additional name</label>
			<input class="input" id="additionalname" name="additionalname" type="text" autocorrect="off" autocomplete="additional-name" placeholder="John">

			<label class="label" for="familyname">Family name</label>
			<input class="input" id="familyname" name="familyname" type="text" autocorrect="off" autocomplete="family-name" placeholder="Berners-Lee">

			<label class="label" for="company">Company</label>
			<input class="input" id="company" name="company" type="text" autocorrect="off" autocomplete="organization" placeholder="World Wide Web Consortium">

			<label class="label" for="street">Street</label>
			<input class="input" id="street" name="street" type="text" autocorrect="off" autocomplete="address-line1" placeholder="32 Vassar Street">

			<label class="label" for="postalcode">Postal code</label>
			<input class="input" id="postalcode" name="postalcode" type="text" pattern="\d*" novalidate autocorrect="off" autocomplete="postal-code" placeholder="02139">

			<label class="label" for="city">City</label>
			<input class="input" id="city" name="city" type="text" autocorrect="off" autocomplete="address-level2" placeholder="Cambridge">

			<label class="label" for="tel">Phone</label>
			<input class="input" id="tel" name="tel" type="tel" autocorrect="off" autocomplete="tel" placeholder="+1 617 253 5702">

			<label class="label" for="email">E-Mail</label>
			<input class="input" id="email" name="email" type="email" autocapitalize="off" autocorrect="off" autocomplete="email" placeholder="timbl@w3.org">

			<label class="label" for="countrycode">Country code</label>
			<input class="input" id="countrycode" name="countrycode" type="text" autocapitalize="off" autocorrect="off" autocomplete="country" placeholder="DE">

			<label class="label" for="countryname">Country name</label>
			<input class="input" id="countryname" name="countryname" type="text" autocomplete="country" placeholder="Germany">

			<label class="label" for="birthday">Birthday</label>
			<input class="input" id="birthday" name="birthday" type="date" autocorrect="off" autocomplete="bday" placeholder="YYYY-MM-DD" disabled>

			<label class="label" for="file">File</label>
			<input class="input" id="file" name="file" type="file">

			<label class="label" for="message">Message</label>
			<textarea class="input" id="message" name="message" rows="8" cols="40"></textarea>

			<div class="control">
				<input class="control__input" id="optionone" type="radio" name="option" value="optionone" checked>
				<label class="control__label" for="optionone">Option One</label>
			</div>

			<div class="control">
				<input class="control__input" id="optiontwo" type="radio" name="option" value="optiontwo">
				<label class="control__label" for="optiontwo">Option Two</label>
			</div>

			<div class="control">
				<input class="control__input" id="optionthree" type="radio" name="option" value="optionthree" disabled>
				<label class="control__label" for="optionthree">Option Three</label>
			</div>

			<div class="control">
				<input class="control__input" id="checkone" type="checkbox" name="checkone" value="checkone" checked>
				<label class="control__label" for="checkone">Check One</label>
			</div>

			<div class="control">
				<input class="control__input" id="checktwo" type="checkbox" name="checktwo" value="checktwo">
				<label class="control__label" for="checktwo">Check Two</label>
			</div>

			<div class="control">
				<input class="control__input" id="checkthree" type="checkbox" name="checkthree" value="checkthree" disabled>
				<label class="control__label" for="checkthree">Check Three</label>
			</div>

			<div class="control">
				<input class="control__input" id="checkfour" type="checkbox" name="checkfour" value="checkfour" checked disabled>
				<label class="control__label" for="checkfour">Check Four</label>
			</div>
		`
	},
	cookie: require('../cookie/cookie.data')
}