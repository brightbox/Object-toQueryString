describe 'Object'

  describe '.isDict()'
    it 'should return true for a Dict'
      Object.isDict({"foo": "bar"}).should.be_true
      Object.isDict({}).should.be_true
    end

    it 'should return false for other objects'
      Object.isDict(true).should.be_false
      Object.isDict(false).should.be_false
      Object.isDict("string").should.be_false
      Object.isDict(["Array"]).should.be_false
    end
  end

  describe '.toQueryString()'

    it 'should handle single level dicts'
      Object.toQueryString({"foo": "bar"}).should.equal "foo=bar"
      Object.toQueryString({"foo": "bar", "sed": "baz"}).should.equal "foo=bar&sed=baz"
    end

    it 'should handle nested dicts'
      Object.toQueryString({"qux": {"corge": "grault"}, "garply": "waldo"}).should.equal "qux%5Bcorge%5D=grault&garply=waldo"
      bigger_nested_dict = {"qux": {"corge": "grault", "fred": "plugh"}, "garply": "waldo"}
      Object.toQueryString(bigger_nested_dict).should.equal "qux%5Bcorge%5D=grault&qux%5Bfred%5D=plugh&garply=waldo"
    end

    it 'should handle multi-dimensional dicts'
      dict = {"foo": {"bar": {"sed": "baz", "garply": "waldo"}, "xyzzy": "thud"}, "fred": "plugh"}
      Object.toQueryString(dict).should.equal "foo%5Bbar%5D%5Bsed%5D=baz&foo%5Bbar%5D%5Bgarply%5D=waldo&foo%5Bxyzzy%5D=thud&fred=plugh"
    end

    it 'should url escape keys'
      dict = {"foo&bar": "baz"}
      Object.toQueryString(dict).should.equal "foo%26bar=baz"
    end

    it 'should url escape values'
      dict = {"foo": "baz&sed"}
      Object.toQueryString(dict).should.equal "foo=baz%26sed"
    end

  end
end
