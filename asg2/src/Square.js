export class SquareShape {
  constructor(gl, aPosition, uFragColor, uPointSize) {
    this.gl = gl;
    this.aPosition = aPosition;
    this.uFragColor = uFragColor;
    this.uPointSize = uPointSize;

    this.position = [0, 0];
    this.color = [1, 1, 1, 1];
    this.size = 10;
  }

  render() {
    const gl = this.gl;
    gl.uniform4f(this.uFragColor, ...this.color);
    gl.uniform1f(this.uPointSize, this.size);
    gl.disableVertexAttribArray(this.aPosition);
    gl.vertexAttrib3f(this.aPosition, this.position[0], this.position[1], 0);
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}
